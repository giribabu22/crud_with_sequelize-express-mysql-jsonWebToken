const user_data = require('../models/user_datas');
const express = require('express')
const routes = express.Router()

routes.route('')
    .get((req, res) => res.send('registation !'))
    .post(async (req, res) => {
        console.log(req.body);
        await user_data.create(req.body).then((result) => {
            res.send(` your account has created seccessfully,your id:${result.id}`)
        }).catch((errors) => {
            res.send(errors.message)
        });
    })


module.exports = routes
