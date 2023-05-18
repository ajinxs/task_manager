const express = require('express');
const app = express();
const PORT = 8000;
const task = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config();


//middleware
app.use(express.json());

app.use('/api/v1/task', task)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, console.log(`Server is running on ${PORT}`));
    } catch (error) {
        console.log(error)
    }
}

start();    

