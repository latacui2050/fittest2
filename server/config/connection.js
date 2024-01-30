const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ellencui15:bXyHZOo3MPjCsoSQ@cluster0.6y62e01.mongodb.net/firstdb?retryWrites=true&w=majority/');

module.exports = mongoose.connection;

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
