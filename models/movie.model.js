const Sequelize = require('sequelize');
const db = require('../config/db.config');

const Movie = db.define('movie', {
  movie_id: {
    type: Sequelize.INTEGER, primaryKey: true
  },
  movie_title: {
    type: Sequelize.STRING
  },
  movie_year: {
    type: Sequelize.INTEGER
  },
  movie_time: {
    type: Sequelize.DECIMAL
  },
  movie_language: {
    type: Sequelize.STRING
  },
  movie_date_release: {
    type: Sequelize.DATE
  }


})

// Movie.belongsTo(Role, {foreignKey: 'movie_id'})

module.exports = Movie;