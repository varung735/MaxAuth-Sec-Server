const express = require('express');
const authRouter = require('./auth/auth.router');

const verOneRouter = express.Router();

verOneRouter.use('/auth', authRouter);

module.exports = verOneRouter;