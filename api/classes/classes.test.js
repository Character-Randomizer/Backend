const ClassModel = require(`./classes-model`)
const db = require(`../../data/dbConfig`)
const { expected_classes} = require(`../test_constants/classes`)
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

describe(`Classes Router /api/classes`, () => {
    describe(`[1] Classes model is working correctly`, () => {
        test(`[1.1] getAllClasses retrieves all classes`, async () => {
            const res = await ClassModel.getAllClasses()

            expect(res).toHaveLength(14)
        })
        test(`[1.2] getClassById returns class by id`, async () => {
            const res = await ClassModel.getClassBy('class_id', 6)

            expect(res).toMatchObject({
                class_id: 6, 
                class: 'Druid',
                class_description: `A priest of the Old Faith, wielding the powers of nature and adopting animal forms.`
            })
        })
    })


    describe(`[2] Classes router is working correctly`, () => {
        describe(`[2.1] GET '/'`, () => {
            test(`[2.11] returns 200 ok`, async () => {
                let res = await supertest(server)
                    .get('/api/classes')
                
                expect(res.status).toBe(200)
            })

            test(`[2.11] returns an array of classes`, async () => {
                let res = await supertest(server)
                    .get('/api/classes')
                
                expect(res.body).toHaveLength(14)
            })

            test(`[2.12] returns an array containing all of the classes`, async () => {
                let res = await supertest(server)
                    .get('/api/classes')
                
                expect(res.body).toEqual(expect.arrayContaining(expected_classes))
            })

            test(`[2.13] returns 404 not found when no classes in db`, async () => {
                await db.raw('TRUNCATE "Classes" RESTART IDENTITY CASCADE')

                let res = await supertest(server)
                    .get('/api/classes')

                expect(res.status).toBe(404)
            })

            test(`[2.14] returns 404 message when no classes in db`, async () => {
                let res = await supertest(server)
                    .get('/api/classes')

                expect(res.body).toMatchObject({
                    message: `No classes in db`
                })
            })
        })
        
        describe(`[2.2] GET '/:id`, () => {
            beforeAll(async () => {
                await resetdb()
            })

            test(`[2.21] returns 200 ok with `, async () => {
                let res = await supertest(server)
                    .get(`/api/classes/${5}`)

                expect(res.status).toBe(200)
            })

            test(`[2.22] returns with an object `, async () => {
                let res = await supertest(server)
                    .get(`/api/classes/${5}`)

                expect(res.body).toMatchObject(expected_classes[4])
            })

            test(`[2.23] returns 404 not found when no class with id exists`, async () => {
                let res = await supertest(server)
                    .get(`/api/classes/${9000}`)
        
                expect(res.body).toMatchObject({
                    message: `Could not get class with id: 9000`
                })
            })
        })
    })
})