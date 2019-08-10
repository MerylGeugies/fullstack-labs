const Sequelize = require('sequelize');
const databaseUrl =process.env.DATABASE_URL || "https://pure-thicket-37035.herokuapp.com/advertisement"
// const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'; 
const db = new Sequelize(databaseUrl);

function onSync () {
  console.log('Database works!')
}

db 
  .sync({force: false})
  .then(onSync)
  .catch(console.error)

  module.exports = db;