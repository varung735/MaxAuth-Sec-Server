const express = require('express');
const check_origin = require('../../middlewares/check_origin');
const check_api_key = require('../../middlewares/check_api_key');
const schema_validator = require('../../middlewares/schema_validator');
const authControllers = require('./auth.controllers');

const authRouter = express.Router();

authRouter.post('/login', check_origin, check_api_key, authControllers.Login);
authRouter.post('/signup', check_origin, check_api_key, schema_validator, authControllers.Signup);

module.exports = authRouter;