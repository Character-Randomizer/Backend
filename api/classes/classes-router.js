const router = require('express').Router()
const {
    getAllClasses,
    getClassBy
} = require('./classes-model')
const { getFocusBy } = require('../class-focuses/focus-model')

router
    .get(`/`, (req, res) => {
        getAllClasses()
            .then(classes => {
                if(classes.length === 0){
                    return res.status(404).json({
                        message: `No classes in db`
                    })
                }

                return res.status(200).json(classes)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in classes router [GET] '/'`,
                    error: err.error
                })
            })
})

router
    .get(`/:id/focus`, (req, res) => {
        const class_id = req.params.id

        getFocusBy('class_id', class_id)
            .then(item => {
                if(!item){
                    return res.status(404).json({
                        message: `Could not get class focuses with class id: ${class_id}`
                    })
                }
                return res.status(200).json(item)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in classes router [GET] '/:id/focus'`,
                    error: err.error
                })
            })
    })

router
    .get(`/:id`, (req, res) => {
        const class_id = req.params.id

        getClassBy('class_id', class_id)
            .then(item => {
                if(!item){
                    return res.status(404).json({
                        message: `Could not get class with id: ${class_id}`
                    })
                }
                return res.status(200).json(item)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in classes router [GET] '/:id'`,
                    error: err.error
                })
            })
    })

    
module.exports = router