const User = require('../models/index.js').User
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require('../config/app.js')

//exports login and register functions to auth.js
exports.login =  async (req, res) => {
    const {email, password} = req.body
    try {
        // randomly generate secret key
        // const secret = require('crypto').randomBytes(64).toString('hex')

        // find the user with the entered email
        const user = await User.findOne({where: {email: email}});

        // check if email matches a user, continue if user found
        if (!user){
            return res.status(404).json({message: "User not found"})
        
        // check if user password is correct, return error message if incorrect, continue otherwise
        }else if(!bcrypt.compareSync(password, user.password)){
            return res.status(401).json({message: "Incorrect password"})
        }
        // if no errors were caught above, generate json web token for the specific user
        // and send user information with jwt back to the client without password shown
        const userWithToken = generateToken(user.get({raw: true}));

        // getter function in user.avatar is executed here
        userWithToken.user.avatar = user.avatar

        return res.send(userWithToken);

    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.register =  async (req, res) => {

    try{
        // save user credentials
        // when calling User.create, user model is being applied and password is hashed before creating user
        const user = await User.create(req.body)
        // create JWT without password field
        const userWithToken = generateToken(user.get({raw: true}));
        return res.send(userWithToken);
        // User.create(req.body).then((user) => {
        //     const userWithToken = generateToken(user.get({raw: true}));
        //     return res.send(userWithToken);
        // })

    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

const generateToken = (user) => {
    delete user.password
    const token = jwt.sign(user, config.appKey, {expiresIn: 86400})
    return {...{user}, ...{token}}
}