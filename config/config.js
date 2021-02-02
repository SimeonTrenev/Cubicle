const config = {
    development: {
        PORT : 5000,
        //port : process.env.PORT || 5000
        DB_CONNECTION : 'mongodb://localhost/cubicle'
    },
    production: {
        PORT : 80,
        DB_CONNECTION: 'mongodb+srv://admin:Frontab1@myfirstcluster.zbh03.mongodb.net/test'
    }
};

module.exports = config[process.env.NODE_ENV.trim()]