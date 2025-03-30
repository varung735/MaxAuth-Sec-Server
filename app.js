require('dotenv').config();
const express = require('express');
const connectDB = require('./src/configurations/db_config');
const mainRouter = require('./src');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api', mainRouter);

module.exports = app;