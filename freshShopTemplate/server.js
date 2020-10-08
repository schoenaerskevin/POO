const express = require('express')
const morgan = require('morgan')
const server = express()
const mongoose = require('mongoose');
const dbURI = " mongodb+srv://root:root@cluster0.h4adj.mongodb.net/email?retryWrites=true&w=majority;"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

.then((result) => server.listen(4700))
    .catch((err) => console.log(err))
    //register view engines
    //middleware
server.set('view engine', 'ejs');
server.use(express.static('public'));
server.use(morgan('dev'));



//link to pages
server.get('/', (req, res) => {
    res.render('index');
})
server.get('/index', (req, res) => {
    res.render('index');
});
server.get('/about', (req, res) => {
    res.render('about');
});
server.get('/shop', (req, res) => {
    res.render('shop');
});
server.get('/gallery', (req, res) => {
    res.render('gallery');
});
server.get('/bdrer', (req, res) => {
    res.render('bdrer');
});