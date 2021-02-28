var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}))
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({

    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'neartome'

});
app.use(function (req,res,next) {
    req.con = con
    next()
})

var server = app.listen(4547, function () {
    var host = server.address().adress;
    var port = server.address().port;
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");

});

const dataRouter = require("./routes/NearToMeRouter")

app.use("/NearToMe", dataRouter)


/*app.get('/user', function(req, res) {
    con.query('select * from user',function(error, rows, fields) {
        if(error) console.log(error);
        else {
            console.log(rows);
            res.send(rows);

        }
            
    
    })
});

app.get('/category', function(req, res) {
    con.query('SELECT first_name, name FROM service INNER JOIN user ON service.user = user.id_user WHERE sub_category = 2'
    ,function(error, rows, fields) {
        if(error) console.log(error);
        else {
            console.log(rows);
            res.send(rows);

        }
            
    
    })
});*/