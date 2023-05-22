const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

require('dotenv').config();

// Database
require('./configs/mongoose.config');


// App
const express = require('express');
const app = express();
app.use(cors(corsOptions));

// Configs
require('./configs/cors.config')(app);

app.listen(process.env.PORT,()=>{
    console.log("Learnify server Successfully running on PORT "+ process.env.PORT);
})






module.exports = app;
