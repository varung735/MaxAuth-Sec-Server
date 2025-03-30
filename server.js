const app = require('./app');
const env_config = require('./src/configurations/env_configs');

app.listen(env_config.port, () => {
    console.log(`The server is running on port: ${env_config.port}`);
});