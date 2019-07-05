const app = require('express')();
const https = require('https');
const fs = require('fs');

//GET home route
app.get('/', (req, res) => {
     res.send('Hello World');
});

//console.log(app)
// we will pass our 'app' to 'https' server
https.createServer({
	key: fs.readFileSync('./localhost.key'),
	cert: fs.readFileSync('./localhost.crt'),
	passphrase: 'hello'
}, app).listen(3000);

