const express = require('express');
const {user_data} = require('../tables');
const { creating_token } = require('../authentication/jwt');

const routes = express.Router();
const port = 3000;
try{
    routes
        .route('/id:id')
        .get((req, res) => res.send('login World!'))
        .post(async (req, res) => {
            let id = req.params.id.slice(1)
            let user = await user_data.findByPk(parseInt(id))
            if (user != null) {
                let t = await creating_token(user['dataValues'])
                res.cookie("user", t)
                res.send("login successfully!!")
            } else {
                res.cookie("user", undefined)
                res.json({ 'mes': 'invalide input!!' })
            }
    })
}catch(errors){res.send(errors.message)}
module.exports = routes