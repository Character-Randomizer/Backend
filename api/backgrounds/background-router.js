const router = require('express').Router()
const { getAll, getBackgroundBy } = require('./background-model')

router
    .get(`/`, (req, res) => {
        getAll()
            .then(backgrounds => {
                if(backgrounds.length === 0){
                    return res.status(404).json({
                        message: `No backgrounds in db`
                    })
                }

                return res.status(200).json(backgrounds)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in backgrounds router [GET] '/'`,
                    error: err.error
                })
            })
})

router
    .get(`/background_name`, (req, res) => {
        const { background_name } = req.body

        getBackgroundBy('background_name', background_name)
            .then(item => {
                if(!item){
                    return res.status(404).json({
                        message: `Could not get background by name: ${background_name}`
                    })
                }
                return res.status(200).json(item)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in backgrounds router [GET] '/acronym'`,
                    error: err.error
                })
            })
    })

router
    .get(`/:id`, (req, res) => {
        const background_id = req.params.id

        getBackgroundBy('background_id', background_id)
            .then(item => {
                if(!item){
                    return res.status(404).json({
                        message: `Could not get background with id: ${background_id}`
                    })
                }
                return res.status(200).json(item)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in backgrounds router [GET] '/:id'`,
                    error: err.error
                })
            })
    })

    
module.exports = router