var express = require('express');

var todoController = require('./controllers/TodoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs')

app.use('/assets', express.static('./assets'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);

console.log('You are listening to port 3000');
