const Sequelize = require('sequelize');
const db = require('../config/db.config');

const Genre = db.define('genre', {
  genre: {
    type: Sequelize.STRING, primaryKey: true
  },
},
{
  validate: {
    emptyRow: function () {
      if(this.genre === null) {
        throw new Error("Please enter Genre")
      }
    }
  }
})

module.exports = Genre;