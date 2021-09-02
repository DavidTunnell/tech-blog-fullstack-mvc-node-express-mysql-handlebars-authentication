// Dependencies
const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const handlebars = expressHandlebars.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

//setup handlebars with express
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//allow api to use json and url encoding
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//set public folder 
app.use(express.static(path.join(__dirname, 'public')));

// Sets up the routes
app.use(require('./controllers/index-routes'));

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
});