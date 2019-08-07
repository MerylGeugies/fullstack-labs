const Sequelize = require('sequelize');

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:fullstacklabs@localhost:5432/postgres'; 
const db = new Sequelize();

function onSync () {
  console.log('Database works!')
}

db 
  .sync({force: false})
  .then(onSync)
  .catch(console.error)

  module.exports = db;