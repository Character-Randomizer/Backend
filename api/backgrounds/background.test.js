const BackgroundModel = require(`./background-model`)
const db = require(`../../data/dbConfig`)
const { expected_backgrounds } = require(`../../common_constants/backgrounds`)
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

describe(`Backgrounds Router /api/background`, () => {
    describe(`[1] Backgrounds model is working correctly`, () => {
        test(`[1.1] getAll retrieves all Backgrounds`, async () => {
            const res = await BackgroundModel.getAll()

            expect(res).toHaveLength(expected_backgrounds.length)
        })
        test(`[1.2] getAlignBy returns background by id`, async () => {
            const res = await BackgroundModel.getBackgroundBy('background_id', 6)

            expect(res).toMatchObject(expected_backgrounds[5])
        })
    })


    describe(`[2] Backgrounds router is working correctly`, () => {
        describe(`[2.1] GET '/'`, () => {
            test(`[2.11] returns 200 ok`, async () => {
                let res = await supertest(server)
                    .get('/api/background')
                
                expect(res.status).toBe(200)
            })

            test(`[2.11] returns an array of backgrounds`, async () => {
                let res = await supertest(server)
                    .get('/api/background')
                
                expect(res.body).toHaveLength(expected_backgrounds.length)
            })

            test(`[2.12] returns an array containing all of the backgrounds`, async () => {
                let res = await supertest(server)
                    .get('/api/background')
                
                expect(res.body).toEqual(expect.arrayContaining(expected_backgrounds))
            })

            test(`[2.13] returns 404 not found when no backgrounds in db`, async () => {
                await db.raw('TRUNCATE "Backgrounds" RESTART IDENTITY CASCADE')

                let res = await supertest(server)
                    .get('/api/background')

                expect(res.status).toBe(404)
            })

            test(`[2.14] returns 404 message when no backgrounds in db`, async () => {
                let res = await supertest(server)
                    .get('/api/background')

                expect(res.body).toMatchObject({
                    message: `No backgrounds in db`
                })
            })
        })
        
        describe(`[2.2] GET '/:id`, () => {
            beforeAll(async () => {
                await resetdb()
            })

            test(`[2.21] returns 200 ok with `, async () => {
                let res = await supertest(server)
                    .get(`/api/background/${5}`)

                expect(res.status).toBe(200)
            })

            test(`[2.22] returns with an object `, async () => {
                let res = await supertest(server)
                    .get(`/api/background/${5}`)

                expect(res.body).toMatchObject(expected_backgrounds[4])
            })

            test(`[2.23] returns 404 not found when no background with id exists`, async () => {
                let res = await supertest(server)
                    .get(`/api/background/${9000}`)
        
                expect(res.body).toMatchObject({
                    message: `Could not get background with id: 9000`
                })
            })
        })
    })
})