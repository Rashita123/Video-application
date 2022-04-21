const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json())
app.use('/api/videos', require('./routes/videoRoutes'));

app.listen(PORT, (error) => {
    if(!error){
        console.log("Server running sucessfully");
    }else{
        console.log("Error occured");
    }
})