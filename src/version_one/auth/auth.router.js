const express = require('express');
const check_api_key_and_origin = require('../../middlewares/check_api_key_and_origin');
const schema_validator = require('../../middlewares/schema_validator');
const authControllers = require('./auth.controllers');

const authRouter = express.Router();

authRouter.post('/login', check_api_key_and_origin, authControllers.Login);
authRouter.post('/signup', check_api_key_and_origin, schema_validator, authControllers.Signup);

module.exports = authRouter;