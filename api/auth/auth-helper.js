const { JWT_SECRET } = require(`./secrets`)
const jwt = require(`jsonwebtoken`)

const buildToken = user => {
    const payload = {
        subject: user.user_id,
        username: user.username,
    }

    const expires = {
        expiresIn: `1d`
    }
    return jwt.sign(payload, JWT_SECRET, expires)
}

module.export = buildToken