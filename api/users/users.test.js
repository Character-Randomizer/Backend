const Users = require(`./users-model`)
const db = require(`../../data/dbConfig`)
const { existingUser, newUser, updateUser } = require(`../testing-variables`)
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
        const res = await Users.findBy(existingUser.username)
        expect(res).toMatchObject({username: existingUser.username})


        const res2 = await Users.findBy(existingUser.id)
        expect(res2).toMatchObject({user_id: existingUser.id})
    })

    test(`[3] addUser() creates a new user`, async () => {
        const res = await Users.addUser(newUser)

        //may have to update/redo this expect() later
        expect(res).toMatchObject(newUser)
    })

    test(`[4] addUser() adds the new user to the db`, async () => {
        await Users.addUser(newUser)
        const updatedDb = await db(`users`)
    
        expect(updatedDb).toHaveLength(2)
    })

    test(`[5] removeUser() deletes the user`, async () => {
        const user = await Users.addUser(newUser)
        await db(`users`)
        const deletedUser = await Users.findBy({ id: user.id })
        const res = await Users.removeUser(user.id)

        expect(res.status).toBe(200)
        expect(res.body).toMatchObject(deletedUser)
    })

    test(`[6] updateUser() resolves to updated user`, async () => {
        const updatedUser = await Users.updateUser(1, updateUser)

        expect(updatedUser).toMatchObject({ 
            existingUser,
            username: updateUser.username,
            email: updateUser.email
        })
    })

    test(`[7] updateUser() updates the user in the db`, async () => {
        const updatedUser = await Users.updateUser(1, updateUser)
        const updatedDb = await db(`users`)

        expect(updatedDb).toHaveLength(1)
        expect(updatedDb).toEqual(
            expect.arrayContaining([
                expect.objectContaining(
                   updatedUser
                )
            ])
        )
    })
}) 

describe(`users router is working properly`, () => {
    test(`[8] [GET] '/' gets all users from db`, async () => {
        const users = await request(server).get(`/api/users`)

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
        const updatedUser = await request(server).put(`/api/users/1`).send(updateUser)

        expect(updatedUser.status).toBe(200)
        expect(updatedUser.body).toMatchObject({
            ...existingUser, 
            existingUser,
            username: updateUser.username,
            email: updateUser.email
        })
    })

    test(`[12] [PUT] '/:id' updates db with id`, async () => {
        const updatedUser = await request(server).put(`/api/users/1`).send(updateUser)
        const updatedDb = await db(`Users`)

        expect(updatedDb).toEqual(
            expect.arrayContaining([
                expect.objectContaining(
                   updatedUser
                )
            ])
        )
    })

    test(`[13] [PUT] '/:id' throws an error if id doesn't exist`, async () => {
        const id = 100
        const updatedUser = await request(server).put(`/api/users/${id}`).send(updateUser)

        expect(updatedUser.status).toBe(404)
        expect(updatedUser.body).toMatchObject({
            message: `could not retrive user with id: ${id}`
        })
    })

    test(`[12] [DEL] '/:id' deletes the user with the id`, async () => {
        const deletedUser = await request(server).del(`/api/users/1`)

        expect(deletedUser.status).toBe(200)
        expect(deletedUser.body).toMatchObject({
            username: existingUser.username
        })
    })

    test(`[13] [PUT] '/:id' updates db with deleted user`, async () => {
        await request(server).del(`/api/users/1`)
        const updatedDb = await db(`Users`)

        expect(updatedDb).toHaveLength(0)
    })

    test(`[14] [DEL] '/:id' throws an error if id doesn't exist`, async () => {
        const id = 100
        const deletedUser = await request(server).del(`/api/users/${id}`)

        expect(deletedUser.status).toBe(404)
        expect(deletedUser.body).toMatchObject({
            message: `could not find user with id: ${id} to delete`
        })
    })
})