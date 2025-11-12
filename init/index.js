// const mongoose = require('mongoose');
// const initData = require('./data.js');
// const Listing = require('../models/listing.js');

// const MONGO_URL = "mongodb://127.0.0.1:27017/habiRent";

// main().then(() => {
//     console.log("connected to MongoDB");
// }).catch(err => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL)
// }


// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({...obj, owner: '6910721a9e22521df0cddbb3'}));
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

// initDB();

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js'); // This path assumes 'models' folder is one level up from 'init'

const MONGO_URL = process.env.MONGO_URI;

// Async function to connect to the database
async function main() {
    await mongoose.connect(MONGO_URL);
}

// Async function to delete existing data and insert new data
const initDB = async () => {
  // Clear the database
  await Listing.deleteMany({}); 

  // Add the 'owner' field to all your data objects before inserting
  initData.data = initData.data.map((obj) => ({...obj, owner: '691440b14670592ea2eb5328'}));
  
  // Insert the new data
  await Listing.insertMany(initData.data);
  console.log("Data was initialized successfully");

  // Optional: Close the connection after the script is done
  await mongoose.connection.close();
  console.log("Connection closed.");
};


// Call main() to connect, and *then* call initDB() once connected
main()
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
    initDB(); // This now runs only after the connection is successful
  })
  .catch(err => {
    console.log("MongoDB connection error:", err);
  });