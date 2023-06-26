const GendersModel = require(`./genders-model`)
const db = require(`../../data/dbConfig`)
const { expected_genders } = require(`../../common_constants/genders`)
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

describe(`Genders Router /api/alignment`, () => {
    describe(`[1] Genders model is working correctly`, () => {
        test(`[1.1] getAll retrieves all genders`, async () => {
            const res = await GendersModel.getAll()

            expect(res).toHaveLength(expected_genders.length)
        })
        test(`[1.2] getGenderBy returns gender by id`, async () => {
            const res = await GendersModel.getGenderBy('gender_id', 2)

            expect(res).toMatchObject(expected_genders[1])
        })
    })


    describe(`[2] Genders router is working correctly`, () => {
        describe(`[2.1] GET '/'`, () => {
            test(`[2.11] returns 200 ok`, async () => {
                let res = await supertest(server)
                    .get('/api/gender')
                
                expect(res.status).toBe(200)
            })

            test(`[2.11] returns an array of genders`, async () => {
                let res = await supertest(server)
                    .get('/api/gender')
                
                expect(res.body).toHaveLength(expected_genders.length)
            })

            test(`[2.12] returns an array containing all of the genders`, async () => {
                let res = await supertest(server)
                    .get('/api/gender')
                
                expect(res.body).toEqual(expect.arrayContaining(expected_genders))
            })

            test(`[2.13] returns 404 not found when no genders in db`, async () => {
                await db.raw('TRUNCATE "Genders" RESTART IDENTITY CASCADE')

                let res = await supertest(server)
                    .get('/api/gender')

                expect(res.status).toBe(404)
            })

            test(`[2.14] returns 404 message when no genders in db`, async () => {
                let res = await supertest(server)
                    .get('/api/gender')

                expect(res.body).toMatchObject({
                    message: `No genders in db`
                })
            })
        })
        
        describe(`[2.2] GET '/:id`, () => {
            beforeAll(async () => {
                await resetdb()
            })

            test(`[2.21] returns 200 ok with `, async () => {
                let res = await supertest(server)
                    .get(`/api/gender/${1}`)

                expect(res.status).toBe(200)
            })

            test(`[2.22] returns with an object `, async () => {
                let res = await supertest(server)
                    .get(`/api/gender/${1}`)

                expect(res.body).toMatchObject(expected_genders[0])
            })

            test(`[2.23] returns 404 not found when no gender with id exists`, async () => {
                let res = await supertest(server)
                    .get(`/api/gender/${9000}`)
        
                expect(res.body).toMatchObject({
                    message: `Could not get gender with id: 9000`
                })
            })
        })
    })
})