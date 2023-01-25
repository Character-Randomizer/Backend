const Users = require(`../users/users-model`)
const db = require(`../../data/dbConfig`)
const request = require(`supertest`)
const server = require(`../server`)

//username already exists:
const existingUser = {
    username: `testSubject47`,
    password: `bardic`
}

//New user:
const newUser = {
    username: `starStruck`,
    password: `J#g9ujd`
}

//Invalid password:
const invalidPass = {
    username: `testSubject47`,
    password: `12344278`
}

//No username or passowrd:
const noUser = {
    username: ``, 
    password: ``, 
}

const noUser2 = {}

//No username:
const noUsername = {
    username: ``, 
    password: `123456`
}

const noUsername2 = {
    password: `uF93fh!`
}

//No password:
const noPass = {
    username: `Kelly`,
    password: ``
}

const noPass2 = {
    username: `starStruck`,
}


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

        console.log(`Test Res:`, res.status)

        expect(res.status).toBe(200)
        expect(res.body).toMatchObject({message: `API is up and running!`})
    })
})

describe(`[POST] /api/auth/register`, () => {
    test(`[1] creates a new user`, async () => {

    })

    test(`[2] created user is in db`, async () => {

    })

    test(`[3] resolves in an error if username exists`, async () => {
        
    })

    test(`[4] resolves in an error if no username is provided`, async () => {
        
    })

    test(`[5] resolves in an error if no password is provided`, async () => {
        
    })
})

describe(`[POST] /api/auth/login`, () => {
    test(`[6] logs in user (returns user info)`, async () => {
        
    })

    test(`[7] resolves in an error if username is invalid`, async () => {
        
    })

    test(`[8] resolves in an error if password is invalid`, async () => {
        
    })

    test(`[9] resolves in an error if username is not provided`, async () => {
        
    })

    test(`[10] resolves in an error if password is not provided`, async () => {
        
    })
})