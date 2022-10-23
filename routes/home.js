const express = require('express')
const total_postes = require('../models/posts')
const routes = express.Router()

routes
    .route('')
    .get(async (req, res) => {
        let d = await total_postes.findAll()
        var str = ''
        d.forEach(ele => {
            let { id, post_title, post_message, likes } = ele['dataValues']
            str = str.concat(id, ' \t`post_title`: ', post_title, ' \t `post_message:` ', post_message, '\nlikes: ', likes,)
        });
        res.send(str)
    })

module.exports = routes