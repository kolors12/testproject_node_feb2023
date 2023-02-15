const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 9999;

/////////Import controllers /////
const user =   require('./controllers/users');
const role = require('./controllers/roles');

/////-----Post data send chayadaniki----/////
app.use(express.json())

//////////DB Connection/////////////

require('./models/db');



app.get('/',(req,res)=>{

    res.send("hi")
})




app.use('/users',user);
app.use('/roles',role);

app.listen(port,()=>console.log("Server Running " + "htpp://localhost/" + port))