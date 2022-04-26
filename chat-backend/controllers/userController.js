const User = require('../models/index.js').User
const sequelize = require('sequelize')

exports.update = async (req, res) => {
    try{
        // enter whatever is entered in the req.body, where we
        // find the element to be updated using req.user.id
        const [rows, result] = await User.update(req.body,{
            where: {
                id: req.user.id
            },
            returning: true,
            individualHooks: true
        })

        const user = result[0].get({raw: true})
        console.log(user)
        console.log(result[0].avatar)
        user.avatar = result[0].avatar
        console.log(user.avatar)
        delete user.password

        return res.send(user)
    } catch (e) {
        return res.status(500).json({err: e.message})
    }
}