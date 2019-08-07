const Sequelize = require('sequelize');
const db = require('../db');

const Ads = db.define(
  'advertisment',
  {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    picture: Sequelize.STRING,
    price: Sequelize.INTEGER,
    email: Sequelize.STRING,
    phone_number: Sequelize.INTEGER
  }
)
module.exports = Ads;