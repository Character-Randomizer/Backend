const router = require(`express`).Router()
const Users = require(`../users/users-model`)

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

router.get(`/:id`, (req, res) => {
    const user_id = req.params.id

    Users.findBy({ user_id })
        .then(user => {
            if(user){
                res.json(user)
            }
            else{
                throw error
            }
        })
        .catch(err => {
            res.status(404).json({
                message: `could not retrieve user with id: ${user_id}`,
                error: err
            })
        })
})

router.put(`/:id`, (req, res) => {
    const user_id = req.params.id
    const { changes } = req.body

    Users.updateUser({ user_id, changes })
        .then(userUpdated => {
            if(userUpdated){
            res.status(200).json(userUpdated)
            }
            else{
                throw error
            }

        })
        .catch(err => {
            res.status(404).json({
                message: `could not retrieve user with id: ${user_id}`,
                error: err
            })
        })
})

router.delete(`/:id`, (req, res) => {
    const user_id = req.params.id

    Users.removeUser({ user_id })
        .then(deletedUser => {
            if(deletedUser){
            res.status(200).json(deletedUser)
        }
        else{
            throw error
        }
        })
        .catch(err => {
            res.status(404).json({
                message: `could not find user with id: ${user_id} to delete`, 
                error: err
            })
        })
})


module.exports = router