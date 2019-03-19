
var express = require("express");




const hostname = process.env.HOST;
const numeroPortMonAppli = process.env.PORT;


var app = express();
app.use(express.static('grapesjs'));

var server = app.listen(numeroPortMonAppli, hostname, function(){
    var numport = server.address().port;
    var hostname = server.address();
    console.log("Server started at http://" + hostname + ":%s", numport);
});
