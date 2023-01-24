// const router = require(`express`).Router()
// const {JWT_SECRET, BCRYPT_ROUNDS} = require(`./secrets`)
// const jwt = require(`jsonwebtoken`)
// const bcrypt = require(`bcryptjs`)
// //won't work until I make the below file
// const Users = require(`../users/users-model`)


// //Middleware to make:
//     //validate password length/strength
//     //validate username does not exist (register)/exists (login) in db



// router.post(`/register`, (req, res) => {
//     let user = req.body

//     const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS)
//     user.password = hash

//     Users.add(user)
//         .then(saveUser => {
//             res.status(201).json(saveUser)
//         })
//         .catch(err => {
//             console.log(`Error occurred in auth-router /register:`, err)
//         })
// })

// router.post(`/login`, (req, res) => {

// })