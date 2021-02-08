const config = {
    development: {
        PORT : 5000,
        //port : process.env.PORT || 5000
        DB_CONNECTION : 'mongodb://localhost/cubicle',
        SALT_ROUNDS: 10,
        SECRET: 'some secret',
        COOKIE_NAME: 'USER_SESSION',
    },
    production: {
        PORT : 80,
        DB_CONNECTION: 'mongodb+srv://admin:Frontab1@myfirstcluster.zbh03.mongodb.net/test',
        // SALT_ROUNDS: 2,
        SECRET: 'some secret',
        COOKIE_NAME: 'USER_SESSION',
    }
};

module.exports = config[process.env.NODE_ENV.trim()]