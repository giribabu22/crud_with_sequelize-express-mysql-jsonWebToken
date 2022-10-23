const posts = require('../models/posts');
const express = require('express');
const routes = express.Router();

routes.route('')
    .get((req,res)=>{res.send('this is the new post page!!')})
    .post(async (req, res)=> {
        try{
            const { post_title,post_message } = req.body;
            let r = await posts.create({
                'userDatumId':req.user.id,
                "post_title":post_title,
                "post_message":post_message,
                likes:0 ,
                dislikes:0 
            });
            res.json({'msg':"Posted successfully"});
        
        } catch (errors) { res.send(errors.message );}
});

module.exports = routes