const router = require(`express`).Router()
const { JWT_SECRET, BCRYPT_ROUNDS } = require(`./secrets`)
const jwt = require(`jsonwebtoken`)
const bcrypt = require(`bcryptjs`)
//won't work until I make the below file
const Users = require(`../users/users-model`)
const { checkRegisterBody, checkUsernameFree, checkLoginBody, checkUsernameValid } = require("./auth-middleware")
const { buildToken } = require(`./auth-helper`)


router.post(`/register`, checkRegisterBody, checkUsernameFree, (req, res) => {
    let user = req.body

    const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS)
    user.password = hash

    Users.add(user)
        .then(saveUser => {
            const token = buildToken(user)

            res.status(201).json({
                user: saveUser,
                token
            })
        })
        .catch(err => {
            res.status(500).json({
                message: `Occurred in auth-router /register`,
                error: err
        })
    })
})

router.post(`/login`, checkLoginBody, checkUsernameValid, (req, res) => {
    let { username, password } = req.body

    //not sure if I need the middleware checkUsernameValid since the below code is also checking if there is an user:
    Users.findBy({ username })
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = buildToken(user)

                res.status(200).json({
                    message: `Welcome back ${user.username}`,
                    token
                })
            }
            else{
                res.status(401).json({ 
                    message: `Invalid Credentials`
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: `Occurred in auth-router /login`,
                error: err
            })
        })
})