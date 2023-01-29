const router = require(`express`).Router()
const { JWT_SECRET, BCRYPT_ROUNDS } = require(`./secrets`)
const jwt = require(`jsonwebtoken`)
const bcrypt = require(`bcryptjs`)
const Users = require(`../users/users-model`)
const { checkRegisterBody, checkLoginBody } = require("./auth-middleware")
const buildToken = require(`./auth-helper`)


router.post(`/register`, checkRegisterBody, (req, res) => {
    let user = req.body

    const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS)
    user.password = hash

    Users.addUser(user)
        .then(saveUser => {
            const token = buildToken.saveUser

            res.status(201).json({
                user: saveUser,
                token
            })
        })
        .catch(err => {
            res.status(500).json({
                message: `Occurred in auth-router '/register'`,
                error: err
        })
    })
})

router.post(`/login`, checkLoginBody, (req, res) => {
    let { username, password } = req.body
    let existingUser = req.body
    console.log(req.body)

    if(existingUser && bcrypt.compareSync(password, existingUser.password)){
        const token = buildToken(existingUser)

        res.status(200).json({
            message: `Welcome back ${username}`,
            token
        })
     }
    else{
        res.status(401).json({ 
            message: `Invalid Credentials`
        })
    }
})

module.exports = router