const Users = require(`../users/users-model`)
const { JWT_SECRET } = require(`./secrets`)
const jwt = require(`jsonwebtoken`)

function checkUnFree(req, res, next){
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
            if(user === undefined || !user.length === undefined){
                next()
            }
            else{
                return res.status(422).json({message: `username taken`})
            }
        })
        .catch(err => {
            return res.status(500).json({message: `Error occurred in auth middleware for free username: ${err}`})
        })
}

function checkRegisterBody(req, res, next){
    const { username, password, email, 
            terms, first_name, last_name } = req.body

    if(!username){
        return res.status(400).json({message: `username required`})
    }
    else if(!password){
        return res.status(400).json({message: `password required`})
    }
    else if(!email){
        return res.status(400).json({message: `email required`})
    }
    else if(!first_name){
        return res.status(400).json({message: `first name required`})
    }
    else if(!last_name){
        return res.status(400).json({message: `last name required`})
    }
    else if(terms === false){
        return res.status(400).json({message: `agree to terms to proceed`})
    }
    else{
        next()
    }
}

function checkUnValid(req, res, next){
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
            return res.status(500).json({message: `Error occurred in auth middleware for valid username: ${err}`})
        })
}

function userAuth(req, res, next){
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
    checkUnFree,
    checkRegisterBody,
    checkUnValid,
    userAuth
}