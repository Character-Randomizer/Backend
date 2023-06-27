const RaceModel = require(`./race-model`)
const db = require(`../../data/dbConfig`)
const { expected_races } = require(`../../common_constants/races`)
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

describe(`Races Router /api/race`, () => {
    describe(`[1] Races model is working correctly`, () => {
        test(`[1.1] getAll retrieves all races`, async () => {
            const res = await RaceModel.getAll()

            expect(res).toHaveLength(expected_races.length)
        })
        test(`[1.2] getRaceBy returns race by id`, async () => {
            const res = await RaceModel.getRaceBy('race_id', 6)

            expect(res).toMatchObject(expected_races[5])
        })
    })


    describe(`[2] Races router is working correctly`, () => {
        describe(`[2.1] GET '/'`, () => {
            test(`[2.11] returns 200 ok`, async () => {
                let res = await supertest(server)
                    .get('/api/race')
                
                expect(res.status).toBe(200)
            })

            test(`[2.11] returns an array of races`, async () => {
                let res = await supertest(server)
                    .get('/api/race')
                
                expect(res.body).toHaveLength(expected_races.length)
            })

            test(`[2.12] returns an array containing all of the races`, async () => {
                let res = await supertest(server)
                    .get('/api/race')
                
                expect(res.body).toEqual(expect.arrayContaining(expected_races))
            })

            test(`[2.13] returns 404 not found when no races in db`, async () => {
                await db.raw('TRUNCATE "Races" RESTART IDENTITY CASCADE')

                let res = await supertest(server)
                    .get('/api/race')

                expect(res.status).toBe(404)
            })

            test(`[2.14] returns 404 message when no races in db`, async () => {
                let res = await supertest(server)
                    .get('/api/race')

                expect(res.body).toMatchObject({
                    message: `No races in db`
                })
            })
        })
        
        describe(`[2.2] GET '/:id`, () => {
            beforeAll(async () => {
                await resetdb()
            })

            test(`[2.21] returns 200 ok with `, async () => {
                let res = await supertest(server)
                    .get(`/api/race/${5}`)

                expect(res.status).toBe(200)
            })

            test(`[2.22] returns with an object `, async () => {
                let res = await supertest(server)
                    .get(`/api/race/${5}`)

                expect(res.body).toMatchObject(expected_races[4])
            })

            test(`[2.23] returns 404 not found when no race with id exists`, async () => {
                let res = await supertest(server)
                    .get(`/api/race/${9000}`)
        
                expect(res.body).toMatchObject({
                    message: `Could not get race with id: 9000`
                })
            })
        })
    })
})