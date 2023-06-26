const router = require('express').Router()
const { getAll, getRaceBy } = require('./race-model')

router
    .get(`/`, (req, res) => {
        getAll()
            .then(races => {
                if(races.length === 0){
                    return res.status(404).json({
                        message: `No races in db`
                    })
                }

                return res.status(200).json(races)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in races router [GET] '/'`,
                    error: err.error
                })
            })
})

router
    .get(`/:id`, (req, res) => {
        const race_id = req.params.id

        getRaceBy('race_id', race_id)
            .then(item => {
                if(!item){
                    return res.status(404).json({
                        message: `Could not get race with id: ${race_id}`
                    })
                }
                return res.status(200).json(item)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in races router [GET] '/:id'`,
                    error: err.error
                })
            })
    })

    
module.exports = router