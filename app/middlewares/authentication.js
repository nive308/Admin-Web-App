const { User } = require('../models/user')

const authenticateUser = (req,res,next) => {
    const token = req.headers['x-auth']
    User.findByToken(token)
        .then((user) => {
            if(user){
                console.log('middle', user)
                req.user = user
                req.token = token
                next()
            } else {
                res.status('401').send('Invalid token')
            }
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports = {
    authenticateUser
}