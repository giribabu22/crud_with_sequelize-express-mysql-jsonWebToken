const user_data = require('./models/user_datas');
const posts = require('./models/posts');
const feedback = require('./models/feedback');
const db = require('./db/dase')

user_data.hasMany(posts)
posts.hasMany(feedback)
user_data.hasMany(feedback)

db.sync({ forse: false }).then((result) => {
    console.log('!! all set.... ');
}).catch((err) => {
    console.log(err);
});

module.exports = { user_data, posts, feedback, db }