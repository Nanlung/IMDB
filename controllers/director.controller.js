const Director = require('../models/director.model');

exports.create = (req, res) => {
  const director =  {
    director_id: req.body.actor_id,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }
  Director.create(director)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding director."
      });
    });
};

// find all controller
exports.findAll = async(req,res) => {
  try {
    const directors = await Director.findAll();
    res.status(200).send(directors);
  } catch (error) {
    console.error(error.message);
  }
 };