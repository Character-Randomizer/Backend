const router = require('express').Router()
const { getAllAlign, getAlignBy } = require('./alignment-model')

router
    .get(`/`, (req, res) => {
        getAllAlign()
            .then(alignments => {
                if(alignments.length === 0){
                    return res.status(404).json({
                        message: `No alignments in db`
                    })
                }

                return res.status(200).json(alignments)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in alignments router [GET] '/'`,
                    error: err.error
                })
            })
})

router
    .get(`/acronym`, (req, res) => {
        const { alignment_acronym } = req.body

        getAlignBy('alignment_acronym', alignment_acronym)
            .then(item => {
                if(!item){
                    return res.status(404).json({
                        message: `Could not get alignment by acronym: ${alignment_acronym}`
                    })
                }
                return res.status(200).json(item)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in alignments router [GET] '/acronym'`,
                    error: err.error
                })
            })
    })

router
    .get(`/:id`, (req, res) => {
        const align_id = req.params.id

        getAlignBy('alignment_id', align_id)
            .then(item => {
                if(!item){
                    return res.status(404).json({
                        message: `Could not get alignment with id: ${align_id}`
                    })
                }
                return res.status(200).json(item)
            })
            .catch(err => {
                return res.status(500).json({
                    message: `Error occurred in alignments router [GET] '/:id'`,
                    error: err.error
                })
            })
    })

    
module.exports = router