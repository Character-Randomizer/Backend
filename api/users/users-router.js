const router = require(`express`).Router()
const Users = require(`../users/users-model`)
const { checkUserId } = require(`./users-middleware`)
const bcrypt = require(`bcryptjs`)
const { BCRYPT_ROUNDS } = require(`../auth/secrets`)

router.get(`/`, (req, res) => {
    Users.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            console.log(`ERROR:`, err)

            return res.status(500).json({
                message: `Error occurred in users router [GET] '/'`
            })
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
                message: `Error occured in users router [GET] '/id'`
            })
        })
})

router.put(`/:id`, checkUserId, (req, res) => {
    const user_id = req.params.id
    const { changes } = req.body

    if(changes.password){
        const hash = bcrypt.hashSync(changes.password, BCRYPT_ROUNDS)
        changes.password = hash
    }

    Users.updateUser({ user_id, changes })
        .then(userUpdated => {
            res.status(200).json(userUpdated)
        })
        .catch(err => {
            console.log(`ERROR:`, err)

            res.status(500).json({
                message: `Error occurred in users router [PUT] '/:id'`
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
            console.log(`ERROR:`, err)
            
            res.status(500).json({
                message: `Error ocured in users router [DEL] '/:id'`
            })
        })
})


module.exports = router