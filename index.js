var express = require("express");
var app = express();

var path = require('path');
var users = require('./users.json');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/about', function(req, res) {
    res.send("This is about page !");
});

app.post('/login', function(req, res) {
    console.log(req.body); // This your request data
    var body = req.body;
    var valid = "";

    for (var i=0; i <users.length; i++) {
        if ((body.login === users[i].login) && (body.password === users[i].password)) {
            valid = true;
            break;
        }
    }

    if (valid) {
        console.log("valid password");
    }
    else {
        console.log("wrong password");
    }
	

    res.send("This is auth route");
});

app.listen(3000, function() {
    console.log("Server is working on http://localhost:3000/");
});