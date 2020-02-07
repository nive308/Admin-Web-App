const { User } = require('../models/user')
const _=require('lodash')

module.exports.register = (req,res) => {
    new User(req.body).save()
        .then((user) => {
            res.send({user})
        })
        .catch((err) => {
            res.send(err)
        })
}
module.exports.login = (req,res) => {
    const { email, password } = req.body
    User.findByCredentials(email,password)
        .then((user) => {
            user.generateToken()
                .then((token) => {
                    res.send({token})
                })
                .catch((err) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.send(err)
        })
}
module.exports.account = function(req,res){
    console.log(req.user)
    const user = _.pick(req.user,['_id','username','email','role'])
    res.json(user)
}

module.exports.logout = (req,res) => {
    const { user, token } = req
    User.findByIdAndUpdate({$pull: {tokens: {token: token}}})
        .then(() => {
            res.json({notice:'Successfully logged out.....'})
        })
        .catch((err) => {
            res.json(err)
        })
}