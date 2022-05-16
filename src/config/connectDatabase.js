const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('zingembede', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  raw: true
});

// let check
let connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection DB has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = { connectDatabase }