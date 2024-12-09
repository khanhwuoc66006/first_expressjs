const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const port = 3000;

// Static file 

app.use(express.static(path.join(__dirname, "public/")));

// HTTP logger
app.use(morgan('combined'));

// Template engine 

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "resources\\views"));

// Router
app.get('/', (req, res) => res.render("home"));
app.get('/news', (req, res) => res.render("news"));

app.listen(port, () => console.log("App is listening at port: " + port));