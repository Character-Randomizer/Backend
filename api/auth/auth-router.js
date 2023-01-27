const router = require(`express`).Router()
const { JWT_SECRET, BCRYPT_ROUNDS } = require(`./secrets`)
const jwt = require(`jsonwebtoken`)
const bcrypt = require(`bcryptjs`)
//won't work until I make the below file
const Users = require(`../users/users-model`)
const { checkRegisterBody, checkUnFree, checkUnValid } = require("./auth-middleware")


router.post(`/register`, checkRegisterBody, checkUnFree, (req, res) => {
    let user = req.body

    const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS)
    user.password = hash

    Users.addUser(user)
        .then(saveUser => {
            res.status(201).json(saveUser)
        })
        .catch(err => {
            console.log(`Error occurred in auth-router /register:`, err)
        })
})

router.post(`/login`, checkUnValid, (req, res) => {
    let { username, password } = req.body

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
                message: `Error occurred in auth-router /login: ${err}`
            })
        })
})

const buildToken = user => {
    const payload = {
        subject: user.user_id,
        username: user.username,
        expiresIn: `1d`
    }

    return jwt.sign(payload, JWT_SECRET)
}