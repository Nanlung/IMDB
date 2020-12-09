const Actor = require('../models/actor.model');

exports.create = (req, res) => {
  const actor =  {
    actor_id: req.body.actor_id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender
  }
  Actor.create(actor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the gig."
      });
    });
};

// find all controller
exports.findAll = async(req,res) => {
  try {
    const actors = await Actor.findAll();
    res.status(200).send(actors);
  } catch (error) {
    console.error(error.message);
  }
 
};