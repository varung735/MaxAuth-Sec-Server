const mongoose = require('mongoose');
const env_config = require('./env_configs');
const consoleFonts = require('../utils/error/consoleFonts');

const connectDB = () => {
    mongoose.connect(env_config.mongo_url)
    .then((dbHost) => {console.log(consoleFonts.success(`Connected To DB: ${dbHost.connection.host}`))})
    .catch((error) => {
        console.log(consoleFonts.error('Cannot Connect To DB'));
        console.log(error);
        process.exit(1);
    });
}

const db = mongoose.connection;

module.exports = { connectDB, db };