const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Connection Succes')
})
connection.on('error' , ()=>{
    console.log('Connection unsuccessful')
})

// const connectDB = async () => {
//     try {
//       await mongoose.connect(process.env.DATABASE_URL);
//       console.log('MongoDB connected');
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
  
//   module.exports = connectDB;