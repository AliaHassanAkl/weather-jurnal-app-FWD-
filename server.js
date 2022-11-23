// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express= require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

// Start up an instance of app
app.post('/main',(req,res)=>{
     // add data to endpoint
     console.log(req.body);
     newData={
        data: req.body.data,
        temp: req.body.temp,
        content: req.body.content
     }
     projectData=newData;
     
})
app.get('/main',(req,res)=>{
     //send data of end point object
    res.send(projectData);
    projectData={};
})
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server= app.listen(port,runningFunc);
function runningFunc (){
    console.log(`running on localhost: ${port}`)
} ;
