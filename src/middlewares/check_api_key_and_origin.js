const axios = require('axios');
const asyncHandler = require('../utils/programming/asyncHandler');
const customError = require('../utils/error/customError');
const env_config = require('../configurations/env_configs');
const enviornment = require('../configurations/enviornments');
const { getRedisClient } = require('../configurations/redis_config');

const main_server_url = env_config.env === enviornment.local ? env_config.main_server_url_local : env_config.main_server_url_prod;

const check_api_key_and_origin = asyncHandler(async (req, res, next) => {
    const { apiKey } = req.query;
    const origin = req.get('host');
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

        if(!response.data.success) {
            throw new customError('Project Doesnot Exists', 404);
        }

        redisClient.set(`project:${response.data.project.apiKey}`, JSON.stringify(response.data.project));
        project = response.data.project;
    }

    // console.log(project);

    req.project = project;
    next();
});

module.exports = check_api_key_and_origin;