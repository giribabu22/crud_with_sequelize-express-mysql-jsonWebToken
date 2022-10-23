var express = require("express")
const routes = express.Router()
// const posts = require('../models/posts')
// const feedback = require('../models/feedbacks')
const { feedback, posts, db } = require('../tables')
routes
    .route('/:id/:feel')
    .get((req, res) => res.send('feedback World!'))
    .post(async (req, res) => {
        let { id, feel } = req.params
        try {
        } catch (errors) {
            res.send(errors.message)
        }
        let likeChick = await feedback.findOne({
            where: {
                postId: id.slice(1),
                userDatumId: req.user.id
            }
        })
        if (likeChick != null) {
            if (likeChick['dataValues'].feeling == 'like') {
                await posts.decrement('likes', {
                    by: 1,
                    where: { id: id.slice(1) }
                })
                await feedback.destroy({
                    where: {
                        postId: id.slice(1), userDatumId: req.user.id
                    }
                })
                res.send("you  already like!! it's now unlike it");
            }
        }
        else {
            let post = await posts.findOne({
                where: { id: id.slice(1) }
            })

            if (feel == ":like" && post != null) {
                post['dataValues'].likes++
                console.log(id.slice(1), req.user.id);
                await feedback.create({ 'feeling': 'like', postId: id.slice(1), userDatumId: req.user.id }).then((result) => {
                }).catch((errors) => {
                    res.send(errors.message)
                });
                await posts.update(
                    { likes: post['dataValues'].likes },
                    {
                        where: { id: id.slice(1) },
                    })
                res.send('like')
            } else {
                // post['dataValues'].dislikes++
                // await feedback.create({ 'feeling': 'dislike', postId: id.slice(1), userDatumId: req.user.id }).then((result) => {
                //     console.log(result);
                // }).catch((err) => {
                //     console.log(err);
                // });
                // await posts.update(
                //     { dislikes: post['dataValues'].dislikes },
                //     {
                //         where: { id: id.slice(1) },
                //     })
                if (post == null){
                    res.send('this id is not exist!!')
                }else{
                    res.send('give feeling `like` then you can like the post')
                }
            }
        }
    })
module.exports = routes;