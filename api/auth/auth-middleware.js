const Users = require(`../users/users-model`)
const { JWT_SECRET } = require(`./secrets`)
const jwt = require(`jsonwebtoken`)


function checkUsernameFree(req, res, next){
    let { username } = req.body

    if(username === undefined){
        return res.status(400).json({message: `username required`})
    }
    else if (username){
        username = username.trim()

        if(username.length === 0){
            return res.status(400).json({message: `username required`})
        }
    }

    Users.findBy({username: username})
        .then(user => {
            if(user === undefined){
                next()
            }
            else{
                return res.status(422).json({message: `username taken`})
            }
        })
        .catch(err => {
            return res.status(500).json({
                message: `Error occurred in auth middleware for free username`,
                error: err
            })
        })
}

function checkRegisterBody(req, res, next){
    const { username, password, email, 
            terms, first_name, last_name } = req.body

    if(Boolean(
        username &&
        password &&
        email &&
        first_name &&
        last_name &&
        terms
    )){
        next()
    }
    else{
        return res.status(400).json({message: `user form not valid`})
    }
}

function checkLoginBody(req, res, next){
    const { username, password } = req.body

    if(Boolean(
        username &&
        password
    )){
        next()
    }
    else{
        return res.status(400).json({message: `Invalid credentials`})
    }
}

//Do I need this function b/c in the router I am also checking if the username is in the db.
function checkUsernameValid(req, res, next){
    const { username } = req.body

    Users.findBy({username: username})
        .then(user => {
            if(!user){
                return res.status(400).json({message: `username and password required`})
            }
            else{
                next()
            }
        })
        .catch(err => {
            return res.status(500).json({
                message: `Occurred in auth middleware for valid username`,
                error: err
            })
        })
}

function tokenValidation(req, res, next){
    const token = req.headers.authorization

    if(!token || token === undefined){
        return res.status(401).json({message: `token required`})
    }
    else{
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err){
                return res.status(401).json({message: `token invalid`})
            }
            else{
                req.decodedJwt = decoded
                next()
            }
        })
    }

    next()
}


module.exports = {
    checkUsernameFree,
    checkRegisterBody,
    checkUsernameValid,
    tokenValidation,
    checkLoginBody
}