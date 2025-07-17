const app = require('./app');
const {connectDB} = require('./src/configurations/db_config');
const env_config = require('./src/configurations/env_configs');
const { connectToRedis } = require('./src/configurations/redis_config');
const consoleFonts = require('./src/utils/error/consoleFonts');

(async () => {
    try {
        await connectDB();
        await connectToRedis();

        app.listen(env_config.port, () => {
            console.log(`The server is running on port: ${env_config.port}`);
        });
    } catch (error) {
        console.log(consoleFonts.error(error));
        process.exit(1);
    }
})();

