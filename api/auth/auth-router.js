const router = require(`express`).Router()
const { BCRYPT_ROUNDS } = require(`./secrets`) 
const bcrypt = require(`bcryptjs`)
const Users = require(`../users/users-model`)
const { checkRegisterBody, checkLoginBody } = require("./auth-middleware")
const { buildToken } = require(`./auth-helper`)


router.post(`/register`, checkRegisterBody, async (req, res) => {
    let user = req.body
    let salt = parseInt(BCRYPT_ROUNDS)

    const hash = bcrypt.hashSync(user.password, salt)
    user.password = hash

    Users.addUser(user)
        .then(async saveUser => {
            const token = await buildToken(saveUser)

            res.status(201).json({
                user: saveUser,
                token
            })
        })
        .catch(err => {
            console.log(`ERROR:`, err)

            res.status(500).json({
                error: err,
                message: `Occurred in auth-router '/register'`
        })
    })
})

router.post(`/login`, checkLoginBody, async (req, res) => {
    let { username, password } = req.body
    let { existingUser } = req.body

    if(bcrypt.compareSync(password, existingUser.password)){
        const token = await buildToken(existingUser)

        res.status(200).json({
            message: `Welcome back ${username}`,
            token,
            user: existingUser
        })
     }
    else{
        res.status(401).json({ 
            message: `Invalid credentials`
        })
    }
})

module.exports = router