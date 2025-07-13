const config = {
    port: process.env.PORT,
    env: process.env.ENV,
    mongo_url: process.env.MONGO_URL,
    redis_local: process.env.REDIS_URL_LOCAL,
    redis_prod: process.env.REDIS_URL_PROD,
    main_server_url_local: process.env.MAIN_SERVER_URL_LOCAL,
    main_server_url_prod: process.env.MAIN_SERVER_URL_PROD
}

module.exports = config;