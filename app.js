var express = require('express');
var todoController=require('./controllers/todoController');
const PORT = process.env.PORT || 8080
var app=express();
//setup template engine
app.set('view engine' , 'ejs');
//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
console.log("Port 3000 is being used in localhost");
