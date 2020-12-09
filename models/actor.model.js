const Sequelize = require('sequelize');
const db = require('../config/db.config');

const Actor = db.define('actor', {
  actor_id: {
    type: Sequelize.INTEGER, primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING
  }, 
  lastName: { 
    type: Sequelize.STRING
  },
  gender: { 
    type: Sequelize.CHAR(1)
  },
},
{
    validate: {
      bothNames: function () {
        if(this.firstName === null || this.lastName === null) {
          throw new Error("First name and Last name required");
        }
      }
    }
  })

  // Actor.belongsTo(Role, {foreignKey: 'actor_id'})

module.exports = Actor;