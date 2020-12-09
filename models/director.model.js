const Sequelize = require('sequelize');
const db = require('../config/db.config');

const Director = db.define('director' , {
  director_id: {
    type: Sequelize.INTEGER, primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
})

module.exports = Director;