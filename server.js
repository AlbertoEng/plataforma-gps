const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const http = require('http');
const bodyparser = require('body-parser');

app.set('port', process.env.PORT || 3000);

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const publicPath = path.resolve(__dirname,'public');
app.use(express.static(publicPath));

const viewPath = path.resolve(__dirname,'views');
app.set('views', viewPath );
app.set('view engine', 'ejs')


app.get('/',(req,res)=>{
    console.log(req.query);
    res.end('hola');
});     

app.post('/',(req,res)=>{
    res.json({
        body: req.body
    });
});


http.createServer(app).listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});