const Users = require(`./users-model`)
const db = require(`../../data/dbConfig`)
const { existingUser, newUser, userUpdate } = require(`../test_constants/users`)
const request = require(`supertest`)
const server = require(`../server`)

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

test(`sanity: enivronment is testing`, () => {
    expect(process.env.NODE_ENV).toBe(`testing`)
})

describe(`users model is working properly`, () => {
    test(`[1] findAll() gets all users`, async () => {
        const res = await Users.findAll()

        expect(res).toHaveLength(1)
    })

    test(`[2] findBy() gets user by requirement`, async () => {
        const res = await Users.findBy({username: existingUser.username})
        expect(res).toMatchObject({username: existingUser.username})


        const res2 = await Users.findBy({user_id: existingUser.user_id})
        expect(res2).toMatchObject({user_id: existingUser.user_id})
    })

    test(`[3] addUser() creates a new user`, async () => {
        const res = await Users.addUser(newUser)

        expect(res).toMatchObject(newUser)
    })

    test(`[4] addUser() adds the new user to the db`, async () => {
        await Users.addUser(newUser)
        const updatedDb = await db(`Users`)
    
        expect(updatedDb).toHaveLength(2)
    })

    test(`[5] removeUser() deletes the user`, async () => {
        const user = await Users.addUser(newUser)
        const deletedUser = await Users.findBy({ user_id: user.user_id })
        const res = await Users.removeUser({user_id: user.user_id})

        expect(res).toMatchObject(deletedUser)
    })

    test(`[5.1] removeUser() deletes the user fron the db`, async () => {
        const user = await Users.addUser(newUser)
        let updatedDb = await db(`Users`)
        expect(updatedDb).toHaveLength(2)

        await Users.removeUser({user_id: user.user_id})
        updatedDb = await db(`Users`)
        expect(updatedDb).toHaveLength(1)
    })

    test(`[6] updateUser() resolves to updated user`, async () => {
        const updatedUser = await Users.updateUser({user_id: 1, changes: userUpdate})

        expect(updatedUser).toMatchObject({ 
            ...existingUser,
            username: userUpdate.username,
            email: userUpdate.email
        })
    })

    test(`[7] updateUser() updates the user in the db`, async () => {
        await Users.updateUser({user_id: 1, changes: userUpdate})
        const updatedDb = await db(`Users`)

        expect(updatedDb).toHaveLength(1)
        expect(updatedDb).toEqual(
            expect.arrayContaining([
                expect.objectContaining(
                   userUpdate
                )
            ])
        )
    })
}) 

describe(`users router is working properly`, () => {
    test(`[8] [GET] '/' gets all users from db`, async () => {
        const users = await request(server).get(`/api/users`)

        expect(users.status).toBe(200)
        expect(users.body).toHaveLength(1)
    })

    test(`[9] [GET] '/:id' gets an user from db with given id`, async () => {
        const getUser = await request(server).get(`/api/users/1`)

        expect(getUser.status).toBe(200)
        expect(getUser.body).toMatchObject(existingUser)
    })

    test(`[10] [GET] '/:id' throws an error if id doesn't exist`, async () => {
        const id = 100
        const getUser = await request(server).get(`/api/users/${id}`)

        expect(getUser.status).toBe(404)
        expect(getUser.body).toMatchObject({message: `could not retrieve user with id: ${id}`})
    })

    test(`[11] [PUT] '/:id' updates user with id`, async () => {
        const id = 1
        const updatedUser = await request(server).put(`/api/users/${id}`).send({changes: userUpdate})

        expect(updatedUser.status).toBe(200)
        expect(updatedUser.body).toMatchObject({
            ...existingUser, 
            username: userUpdate.username,
            email: userUpdate.email
        })
    })

    test(`[12] [PUT] '/:id' updates db with id`, async () => {
        const id = 1
        const updatedUser = await request(server).put(`/api/users/${id}`).send({changes: userUpdate})
        const updatedDb = await db(`Users`)

        expect(updatedDb[0]).toMatchObject(updatedUser.body)
    })

    test(`[13] [PUT] '/:id' throws an error if id doesn't exist`, async () => {
        const id = 100
        const updatedUser = await request(server).put(`/api/users/${id}`).send({changes: userUpdate})

        expect(updatedUser.status).toBe(404)
        expect(updatedUser.body).toMatchObject({
            message: `could not retrieve user with id: ${id}`
        })
    })

    test(`[14] [DEL] '/:id' deletes the user with the id`, async () => {
        const user = await Users.addUser(newUser)
        const deletedUser = await request(server).delete(`/api/users/${user.user_id}`)

        expect(deletedUser.status).toBe(200)
        expect(deletedUser.body).toMatchObject(user)
    })

    test(`[15] [DEL] '/:id' updates db with deleted user`, async () => {
        const user = await Users.addUser(newUser)
        let updatedDb = await db(`Users`)
        expect(updatedDb).toHaveLength(2)

        await request(server).del(`/api/users/${user.user_id}`)
        updatedDb = await db(`Users`)
        expect(updatedDb).toHaveLength(1)
    })

    test(`[16] [DEL] '/:id' throws an error if id doesn't exist`, async () => {
        const id = 100
        const deletedUser = await request(server).del(`/api/users/${id}`)

        expect(deletedUser.status).toBe(404)
        expect(deletedUser.body).toMatchObject({
            message: `could not retrieve user with id: ${id}`
        })
    })
})