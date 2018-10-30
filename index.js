const express = require('express');
const mongoose = require('mongoose');
const blogpost = require('./user')

// Constants
const PORT = 3000;
//const HOST = '0.0.0.0';

// App
const app = express();


mongoose.connect('mongodb://mongodb:27017/test2', function(err, db) {
  if(err) {
      console.log('database is not connected')   
  }
  else {
      console.log('connected!!')
  }
});


app.get('/', (req, res) => {
 
   blogpost.find({}  , (err , data) => {
    if(err){
      res.send('Hello world , there is an error with find')
    }
    else{

      res.send(data);
    }

   })


  // var object = new blogpost({
  //   title:'this is title',
  //   body:'this is body of test'
  // })

  // object.save(function(err , data){
  //   if(err){
  //     res.send('Hello world and everybody');
  //   }
  //   else{
  //     res.send(data);
  //   }
   })
  
app.listen( PORT);
console.log(`Running on http://:${PORT}`);

