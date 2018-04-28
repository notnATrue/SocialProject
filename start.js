var express = require('express'),
    app = express();
 
app.use(express.static(__dirname + '/pages'));
 
app.listen(8080);

