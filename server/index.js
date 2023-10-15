const express = require('express');
const port = 8000;
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

const cookieParser = require('cookie-parser');
const Course = require('./models/Course');
app.use(express.urlencoded());

app.use(cookieParser());


// app.use(bodyParser);

const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(urlencodedParser);


const db = require('./config/mongoose');

app.use('/', require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log(`error : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})