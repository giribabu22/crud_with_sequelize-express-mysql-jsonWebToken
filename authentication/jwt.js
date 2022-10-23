const jwt = require('jsonwebtoken');

async function creating_token(data){
    return jwt.sign(data,'sdsgdsgsdgdgsakds')
}

async function verification(req,res,next){
    if (req.headers.cookie && req.headers.cookie.split('=')[1] != "undefined"){
        let token = req.headers.cookie.split('=')[1]
        let user = jwt.verify(token,'sdsgdsgsdgdgsakds')
        req["user"] = user;
        next()
    }else{
        res.json({'mag':'login first'})
    }
}
module.exports = {creating_token,verification}