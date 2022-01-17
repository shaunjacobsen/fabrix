let express = require('express');

let app = express();
let port = process.env.PORT || 4000;

app.listen(port);

console.log('Server up on ' + port);