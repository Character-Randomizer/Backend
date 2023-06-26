const AlignmentModel = require(`./alignment-model`)
const db = require(`../../data/dbConfig`)
const { expected_alignments } = require(`../../common_constants/alignments`)
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

describe(`Alignments Router /api/alignment`, () => {
    describe(`[1] Alignments model is working correctly`, () => {
        test(`[1.1] getAllAlign retrieves all alignments`, async () => {
            const res = await AlignmentModel.getAllAlign()

            expect(res).toHaveLength(expected_alignments.length)
        })
        test(`[1.2] getAlignBy returns alignment by id`, async () => {
            const res = await AlignmentModel.getAlignBy('alignment_id', 6)

            expect(res).toMatchObject(expected_alignments[5])
        })
    })


    describe(`[2] Alignments router is working correctly`, () => {
        describe(`[2.1] GET '/'`, () => {
            test(`[2.11] returns 200 ok`, async () => {
                let res = await supertest(server)
                    .get('/api/alignment')
                
                expect(res.status).toBe(200)
            })

            test(`[2.11] returns an array of alignments`, async () => {
                let res = await supertest(server)
                    .get('/api/alignment')
                
                expect(res.body).toHaveLength(expected_alignments.length)
            })

            test(`[2.12] returns an array containing all of the alignments`, async () => {
                let res = await supertest(server)
                    .get('/api/alignment')
                
                expect(res.body).toEqual(expect.arrayContaining(expected_alignments))
            })

            test(`[2.13] returns 404 not found when no alignments in db`, async () => {
                await db.raw('TRUNCATE "Alignments" RESTART IDENTITY CASCADE')

                let res = await supertest(server)
                    .get('/api/alignment')

                expect(res.status).toBe(404)
            })

            test(`[2.14] returns 404 message when no alignments in db`, async () => {
                let res = await supertest(server)
                    .get('/api/alignment')

                expect(res.body).toMatchObject({
                    message: `No alignments in db`
                })
            })
        })
        
        describe(`[2.2] GET '/:id`, () => {
            beforeAll(async () => {
                await resetdb()
            })

            test(`[2.21] returns 200 ok with `, async () => {
                let res = await supertest(server)
                    .get(`/api/alignment/${5}`)

                expect(res.status).toBe(200)
            })

            test(`[2.22] returns with an object `, async () => {
                let res = await supertest(server)
                    .get(`/api/alignment/${5}`)

                expect(res.body).toMatchObject(expected_alignments[4])
            })

            test(`[2.23] returns 404 not found when no alignment with id exists`, async () => {
                let res = await supertest(server)
                    .get(`/api/alignment/${9000}`)
        
                expect(res.body).toMatchObject({
                    message: `Could not get alignment with id: 9000`
                })
            })
        })
    })
})