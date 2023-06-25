const express = require(`express`)
const cors = require(`cors`)
const server = express()
const authRouter = require(`./auth/auth-router`)
const userRouter = require(`./users/users-router`)
const classesRouter = require(`./classes/classes-router`)

server.use(express.json())
server.use(cors())
server.use(`/api/users`, userRouter)
server.use(`/api/auth`, authRouter)
server.use(`/api/classes`, classesRouter)

server.get(`/api`, (req, res) => {
    res.status(200).json({message: `API is up and running!`})
})

module.exports = server