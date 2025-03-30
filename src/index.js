const express = require('express');
const verOneRouter = require('./version_one');

const mainRouter = express.Router();

mainRouter.use('/v1', verOneRouter);

module.exports = mainRouter;