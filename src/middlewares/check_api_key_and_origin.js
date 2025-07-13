const axios = require('axios');
const asyncHandler = require('../utils/programming/asyncHandler');
const customError = require('../utils/error/customError');
const env_config = require('../configurations/env_configs');
const enviornment = require('../configurations/enviornments');
const { getRedisClient } = require('../configurations/redis_config');

const main_server_url = env_config.env === enviornment.local ? env_config.main_server_url_local : env_config.main_server_url_prod;

const check_api_key_and_origin = asyncHandler(async (req, res, next) => {
    const { apiKey } = req.query;
    const origin = req.headers.origin;
    const url = `${main_server_url}/api/v1/projects/get/api_key/project?api_key=${apiKey}`;
    const redisClient = getRedisClient();
    let project;

    // console.log(origin);

    if(!apiKey) {
        throw new customError('API key missing.', 403);
    }

    project = await redisClient.get(`project:${apiKey}`);

    if(project === null) {
        const response = await axios.get(url);

        if(!response.success) {
            throw new customError('Project Doesnot Exists', 404);
        }

        getRedisClient.set(`project:${response.apiKey}`, JSON.stringify(response.project));
        project = response.project;
    }

    // console.log(project);

    req.project = JSON.parse(project);
    next();
});

module.exports = check_api_key_and_origin;