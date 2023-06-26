const express = require(`express`)
const cors = require(`cors`)
const server = express()

//Routers:
const alignRouter = require(`./alignments/alignment-router`)
const authRouter = require(`./auth/auth-router`)
const backgroundRouter = require(`./backgrounds/background-router`)
const classRouter = require(`./classes/classes-router`)
const classFocusRouter = require(`./class_focuses/class_focus-router`)
const genderRouter = require('./genders/genders-router')
const raceRouter = require(`./races/race-router`)
const userRouter = require(`./users/users-router`)

server.use(express.json())
server.use(cors())
server.use(`/api/alignment`, alignRouter)
server.use(`/api/auth`, authRouter)
server.use(`/api/background`, backgroundRouter)
server.use(`/api/class`, classRouter)
server.use(`/api/class_focus`, classFocusRouter)
server.use(`/api/gender`, genderRouter)
server.use(`/api/race`, raceRouter)
server.use(`/api/users`, userRouter)


server.get(`/api`, (req, res) => {
    res.status(200).json({message: `API is up and running!`})
})

module.exports = server