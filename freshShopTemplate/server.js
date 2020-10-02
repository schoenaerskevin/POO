const express = require('express')

const server = express()
    //register view engines
server.set('view engine', 'ejs');
server.use(express.static('public'));
server.listen('4700')


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
server.get('/contact-us', (req, res) => {
    res.render('contact-us');
});