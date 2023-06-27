const FocusModel = require(`./focus-model`)
const db = require(`../../data/dbConfig`)
const { expected_focuses } = require(`../../common_constants/class-focuses`)
const server = require(`../server`)
const supertest = require("supertest")

const resetdb = async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
    await db.seed.run()
}

beforeAll(async () => {
    await resetdb()
})

describe(`Class Focuses Router /api/class-focus`, () => {
    describe(`[1] Class Focuses model is working correctly`, () => {
        test(`[1.1] getAll retrieves all class focuses`, async () => {
            const res = await FocusModel.getAll()

            expect(res).toHaveLength(expected_focuses.length)
        })
        test(`[1.2] getAlignBy returns class focus by id`, async () => {
            const res = await FocusModel.getFocusBy('focus_id', 6)

            expect(res).toMatchObject(expected_focuses[5])
        })
    })


    describe(`[2] Class focuses router is working correctly`, () => {
        describe(`[2.1] GET '/'`, () => {
            test(`[2.11] returns 200 ok`, async () => {
                let res = await supertest(server)
                    .get('/api/class-focus')
                
                expect(res.status).toBe(200)
            })

            test(`[2.11] returns an array of class focuses`, async () => {
                let res = await supertest(server)
                    .get('/api/class-focus')
                
                expect(res.body).toHaveLength(expected_focuses.length)
            })

            test(`[2.12] returns an array containing all of the class focuses`, async () => {
                let res = await supertest(server)
                    .get('/api/class-focus')
                
                expect(res.body).toEqual(expect.arrayContaining(expected_focuses))
            })

            test(`[2.13] returns 404 not found when no class focus in db`, async () => {
                await db.raw('TRUNCATE "Class_Focuses" RESTART IDENTITY CASCADE')

                let res = await supertest(server)
                    .get('/api/class-focus')

                expect(res.status).toBe(404)
            })

            test(`[2.14] returns 404 message when no class focuses in db`, async () => {
                let res = await supertest(server)
                    .get('/api/class-focus')

                expect(res.body).toMatchObject({
                    message: `No focuses in db`
                })
            })
        })
        
        describe(`[2.2] GET '/:id`, () => {
            beforeAll(async () => {
                await resetdb()
            })

            test(`[2.21] returns 200 ok with `, async () => {
                let res = await supertest(server)
                    .get(`/api/class-focus/${5}`)

                expect(res.status).toBe(200)
            })

            test(`[2.22] returns with an object `, async () => {
                let res = await supertest(server)
                    .get(`/api/class-focus/${5}`)

                expect(res.body).toMatchObject(expected_focuses[4])
            })

            test(`[2.23] returns 404 not found when no class focus with id exists`, async () => {
                let res = await supertest(server)
                    .get(`/api/class-focus/${9000}`)
        
                expect(res.body).toMatchObject({
                    message: `Could not get class focus with id: 9000`
                })
            })
        })
    })
})