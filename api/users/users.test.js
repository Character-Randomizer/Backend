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
                expect.objectContaining({
                    user_id: 1, 
                    first_name: 'Testy', 
                    last_name: `Subject`, 
                    username: `testy47`, 
                    password: hash,
                    email: `testSubject47@gmail.com`, 
                    terms: true, 
                    dob: 9061647
                })
            ])
        )
    })
}) 

describe(`users router is working properly`, () => {
    test(`[8]`, async () => {

    })

    test(`[]`, async () => {
        
    })

    test(`[]`, async () => {
        
    })

    test(`[]`, async () => {
        
    })

    test(`[]`, async () => {
        
    })
})