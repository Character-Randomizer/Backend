const db = require(`../../data/dbConfig`)
const request = require(`supertest`)
const server = require(`../server`)
const {
        newUser, newUserNoUn, newUserNoPw, 
        newUserNoFirstName, newUserNoLastName, newUserNoEmail, 
        newUserTermsFalse, newUserNoDob, newUserExistingUn, 
        invalidPass, invalidUsername, noUsername, 
        noUsername2, noPass, noPass2
    } = require(`../testing-variables`)

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

describe(`sanity test - [GET] /`, () => {
    test(`server is running`, async () => {
        const res = await request(server).get(`/`)

        expect(res.status).toBe(200)
        expect(res.body).toMatchObject({message: `API is up and running!`})
    })
})

describe(`[POST] /api/auth/register`, () => {
    test(`[1] creates a new user`, async () => {
        const res = await request(server).post(`/api/auth/register`).send(newUser)

        expect(res.status).toBe(201)
        expect(res.body).toEqual(
            expect.objectContaining({
                token: res.body.token,
                user: expect.objectContaining({
                    username: newUser.username
                })
            })
        )
    })

    test(`[2] created user is in db`, async () => {
        await request(server).post(`/api/auth/register`).send(newUser)
        const updatedDb = await db(`Users`)

        expect(updatedDb).toHaveLength(2)
    })  

    test(`[3] resolves in an error if username exists`, async () => {
        const res = await request(server).post(`/api/auth/register`).send(newUserExistingUn)

        expect(res.status).toBe(422)
        expect(res.body).toMatchObject({message: `username taken`})
    })

    test(`[4] resolves in an error if no username is provided`, async () => {
        const res = await request(server).post(`/api/auth/register`).send(newUserNoUn)

        expect(res.status).toBe(400)
        expect(res.body).toMatchObject({message: `username required`})
    })

    test(`[5] resolves in an error if no password is provided`, async () => {
        const res = await request(server).post(`/api/auth/register`).send(newUserNoPw)

        expect(res.status).toBe(400)
        expect(res.body).toMatchObject({message: `user form not valid`})
    })

    test(`[6] resolves in an error if no first name is provided`, async () => {
        const res = await request(server).post(`/api/auth/register`).send(newUserNoFirstName)

        expect(res.status).toBe(400)
        expect(res.body).toMatchObject({message: `user form not valid`})
    })

    test(`[7] resolves in an error if no last name is provided`, async () => {
        const res = await request(server).post(`/api/auth/register`).send(newUserNoLastName)

        expect(res.status).toBe(400)
        expect(res.body).toMatchObject({message: `user form not valid`})
    })

    test(`[8 resolves in an error if no email is provided`, async () => {
        const res = await request(server).post(`/api/auth/register`).send(newUserNoEmail)

        expect(res.status).toBe(400)
        expect(res.body).toMatchObject({message: `user form not valid`})
    })

    test(`[9] resolves in an error if terms (boolean) is false`, async () => {
        const res = await request(server).post(`/api/auth/register`).send(newUserTermsFalse)

        expect(res.status).toBe(400)
        expect(res.body).toMatchObject({message: `agree to terms to proceed`})
    })

    test(`[10] allows new user to be created w/o date of birth`, async () => {
        const res = await request(server).post(`/api/auth/register`).send(newUserNoDob)

        expect(res.status).toBe(201)
        expect(res.body.user).toMatchObject({username: newUserNoDob.username})

        const updatedDb = await db(`Users`)
        expect(updatedDb).toHaveLength(2)
    })
})

describe(`[POST] /api/auth/login`, () => {
    test(`[11] logs in user (returns user info)`, async () => {    
        await request(server).post(`/api/auth/register`).send(newUser)
        const res = await request(server).post(`/api/auth/login`).send({
            username: newUser.username,
            password: newUser.password,
        })
        
        expect(res.status).toBe(200)
        expect(res.body).toMatchObject({
            message: `Welcome back ${newUser.username}`,
            token: res.body.token
        })
    })

    test(`[12] resolves in an error if username is invalid`, async () => {
        const res = await request(server).post(`/api/auth/login`).send(invalidUsername)

        expect(res.status).toBe(400)
        expect(res.body).toMatchObject({message: `Invalid credentials`})
    })

    test(`[13] resolves in an error if password is invalid`, async () => {
        const res = await request(server).post(`/api/auth/login`).send(invalidPass)

        expect(res.status).toBe(401)
        expect(res.body).toMatchObject({message: `Invalid credentials`})
    })

    test(`[14] resolves in an error if username is not provided`, async () => {
        const res1 = await request(server).post(`/api/auth/login`).send(noUsername)
        expect(res1.status).toBe(400)
        expect(res1.body).toMatchObject({message: `Invalid credentials`})

        const res2 = await request(server).post(`/api/auth/login`).send(noUsername2)
        expect(res2.status).toBe(400)
        expect(res2.body).toMatchObject({message: `Invalid credentials`})
    })

    test(`[15] resolves in an error if password is not provided`, async () => {
        const res1 = await request(server).post(`/api/auth/login`).send(noPass)
        expect(res1.status).toBe(400)
        expect(res1.body).toMatchObject({message: `Invalid credentials`})

        const res2 = await request(server).post(`/api/auth/login`).send(noPass2)
        expect(res2.status).toBe(400)
        expect(res2.body).toMatchObject({message: `Invalid credentials`})
    })
})