require('./tables');
const express = require('express');
const { verification } = require('./authentication/jwt')

const app = express();
const port = 3000;

app.use(express.json());

app.use('/login', require('./routes/login'));
app.use('/registation', require('./routes/registation'));

app.use('/new_posts', verification, require('./routes/new_post'));
app.use('/home/feedback', verification, require('./routes/feedback.js'));
app.use('/home', verification, require('./routes/home'));

app.get('/', (req, res) => res.send('wel-come World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));