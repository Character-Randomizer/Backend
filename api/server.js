const express = require(`express`)
const server = express()
const authRouter = require(`./auth/auth-router`)
const userRouter = require(`./users/users-router`)

server.use(express.json())
server.use(`/api/users`, userRouter)
server.use(`/api/auth`, authRouter)

server.get(`/`, (req, res) => {
    res.status(200).json({message: `API is up and running!`})
})

module.exports = server