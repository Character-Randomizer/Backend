const router = require(`express`).Router()
const Users = require(`../users/users-model`)
const { checkUserId } = require(`./users-middleware`)

router.get(`/`, (req, res) => {
    Users.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            return res.status(500).json({
                message: `Error occurred in users router [GET] '/':, ${err}`}
                )
        })
})

router.get(`/:id`, checkUserId, (req, res) => {
    const user_id = req.params.id

    Users.findBy({ user_id })
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            console.log(`ERROR:`, err)
            
            res.status(500).json({
                message: `Error occured in users router [GET] '/id'`,
                error: err
            })
        })
})

router.put(`/:id`, checkUserId, (req, res) => {
    const user_id = req.params.id
    const { changes } = req.body

    Users.updateUser({ user_id, changes })
        .then(userUpdated => {
            res.status(200).json(userUpdated)
        })
        .catch(err => {
            res.status(500).json({
                message: `Error occurred in users router [PUT] '/:id'`,
                error: err
            })
        })
})

router.delete(`/:id`, checkUserId, (req, res) => {
    const user_id = req.params.id

    Users.removeUser({ user_id })
        .then(deletedUser => {
            res.status(200).json(deletedUser)
        })
        .catch(err => {
            res.status(500).json({
                message: `Error ocured in users router [DEL] '/:id'`, 
                error: err
            })
        })
})


module.exports = router