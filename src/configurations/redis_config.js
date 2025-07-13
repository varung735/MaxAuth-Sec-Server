const redis = require('redis');
const env_config = require('./env_configs');
const consoleFonts = require('../utils/error/consoleFonts');
const CustomError = require('../utils/error/customError');

let client;

const connectToRedis = async () => {
    try {
        client = redis.createClient({ url: env_config.redis_local });

        client.on('error', (error) => console.log(consoleFonts.error(error)));

        await client.connect();
        const pong = await client.ping();

        console.log(consoleFonts.success(`Ping Response from Redis: ${pong}`));
    } catch (error) {
        console.log(consoleFonts.error(error.message));
        console.log(error);
    }
};

const getRedisClient = () => {
    if(!client) {
        throw new CustomError('Redis not initialized.', 500);
    }
    return client;
}

module.exports = { connectToRedis, getRedisClient };