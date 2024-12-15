const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const port = 3000;
const route = require('./routes')
// Static file 

app.use(express.static(path.join(__dirname, "public/")));

// HTTP logger
app.use(morgan('combined'));

// Template engine 

app.engine('hbs', handlebars.engine({
    extname: ".hbs"
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources\\views"));

// Router
route(app);

//Middleware
app.use(express.urlencoded);
app.use(express.json);

app.listen(port, () => console.log("App is listening at port: " + port));