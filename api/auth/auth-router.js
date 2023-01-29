const router = require(`express`).Router()
const { BCRYPT_ROUNDS, JWT_SECRET } = require(`./secrets`) 
const jwt = require(`jsonwebtoken`)
const bcrypt = require(`bcryptjs`)
const Users = require(`../users/users-model`)
const { checkRegisterBody, checkLoginBody } = require("./auth-middleware")


router.post(`/register`, checkRegisterBody, (req, res) => {
    let user = req.body

    const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS)
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

// When this is in a seperate file, the code does not register that it is a function for some reason. 
// I have tried different import/export options and none have worked thus far.
// The token function only works when it is in the file where it is invoked
const buildToken = user => {
    const payload = {
        subject: user.user_id,
        username: user.username,
        expiresIn: `1d`
    }

    return jwt.sign(payload, JWT_SECRET)
}

module.exports = router