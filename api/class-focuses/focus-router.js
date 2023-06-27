const router = require('express').Router()
const { getAll, getFocusBy } = require('./focus-model')

router
    .get(`/`, (req, res) => {
        getAll()
            .then(focuses => {
                if(focuses.length === 0){
                    return res.status(404).json({
                        message: `No focuses in db`
                    })
                }

                return res.status(200).json(focuses)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in focuses router [GET] '/'`,
                    error: err.error
                })
            })
})

router
    .get(`/:id`, (req, res) => {
        const focus_id = req.params.id

        getFocusBy('focus_id', focus_id)
            .then(item => {
                if(!item){
                    return res.status(404).json({
                        message: `Could not get class focus with id: ${focus_id}`
                    })
                }
                return res.status(200).json(item)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in class focuses router [GET] '/:id'`,
                    error: err.error
                })
            })
    })

    
module.exports = router