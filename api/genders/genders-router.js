const router = require('express').Router()
const { getAll, getGenderBy } = require('./genders-model')

router
    .get(`/`, (req, res) => {
        getAll()
            .then(genders => {
                if(genders.length === 0){
                    return res.status(404).json({
                        message: `No genders in db`
                    })
                }

                return res.status(200).json(genders)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in genders router [GET] '/'`,
                    error: err.error
                })
            })
})

router
    .get(`/:id`, (req, res) => {
        const gender_id = req.params.id

        getGenderBy('gender_id', gender_id)
            .then(item => {
                if(!item){
                    return res.status(404).json({
                        message: `Could not get gender with id: ${gender_id}`
                    })
                }
                return res.status(200).json(item)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in genders router [GET] '/:id'`,
                    error: err.error
                })
            })
    })

    
module.exports = router