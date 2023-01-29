const Users = require(`../users/users-model`)
const { JWT_SECRET } = require(`./secrets`)
const jwt = require(`jsonwebtoken`)


function checkRegisterBody(req, res, next){
    let { username, password, email, 
            terms, first_name, last_name } = req.body

    //checks if all information for the user that is required is given:
    if(Boolean(
        username &&
        password &&
        email &&
        first_name &&
        last_name &&
        terms
    )){
        //Checks if the username isn't just spaces
        if (username){
            username = username.trim()
    
            if(username.length === 0){
                return res.status(400).json({message: `username required`})
            }
        }
    
        Users.findBy({ username })
            .then(user => {
                //checks that the username doesn't exist:
                if(user === undefined){
                    next()
                }
                //if username does exist:
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
    else if(Boolean(username) === false){
        return res.status(400).json({
            message: `username required`
        })
    }
    else if(Boolean(terms) === false){
        return res.status(400).json({
            message: `agree to terms to proceed`
        })
    }
    else{
        return res.status(400).json({message: `user form not valid`})
    }
}

function checkLoginBody(req, res, next){
    const { username, password } = req.body

    //checks if the username and password are given in the request:
    if(Boolean(
        username &&
        password
    )){
        //checks if the username is in the db:
        Users.findBy({ username })
            .then(user => {
                if(!user){
                    return res.status(400).json({message: `Invalid credentials`})
                }
                else{
                //creating a new variable in the req.body to compare passwords in the login router
                    req.body.existingUser = user
                    next()
                }
            })
            .catch(err => {
                console.log(`MIDDLEWARE ERROR:`, err)
                return res.status(500).json({
                    message: `Occurred in auth middleware for valid username`,
                    error: err
                })
            })
    }
    else{
        return res.status(400).json({message: `Invalid credentials`})
    }
}

//will need this later to get the users characters
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
    checkRegisterBody,
    tokenValidation,
    checkLoginBody
}