const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.get('/api/videos', require('./routes/videoRoutes'));

app.listen(PORT, (error) => {
    if(!error){
        console.log("Server running sucessfully");
    }else{
        console.log("Error occured");
    }
})