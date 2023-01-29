const Users = require(`../users/users-model`)

function checkUserId(req, res, next){
    const user_id = req.params.id

    Users.findBy({ user_id })
        .then(user => {
            if(user){
                next()
            }
            else{
                return res.status(404).json({
                    message: `could not retrieve user with id: ${user_id}`
                })
            }
        })
        .catch(err => {
            console.log(`ERROR:`, err)

            return res.status(500).json({
                message: `Error occurred in users middleware`,
                error: err
            })
        })
}

module.exports = {
    checkUserId
}