const path = require("path");
const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('newpag');
});
app.get('/home', (req, res) => {
    res.render('newpag');
});
app.listen(port);