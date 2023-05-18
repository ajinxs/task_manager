const mongoose = require('mongoose')    

const connectDB = (url) => {
    return mongoose.connect(url, { 
        useNewUrlParser: true,
        //useCreateIndex: true,
        //useFindandModify: true,
        useUnifiedTopology: true,
    })
}

// .then(()=> console.log('CONNECTED TO DB...'))
// .catch((err)=>console.log(err));

module.exports = connectDB