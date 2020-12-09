const Genre = require('../models/genre.model');

exports.create = (req, res) => {
  const genre =  {
        genre: req.body.genre
  }
  Genre.create(genre)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding genre."
      });
    });
};

// find all controller
exports.findAll = async(req,res) => {
  try {
    const genres = await Genre.findAll();
    res.status(200).send(genres);
  } catch (error) {
    console.error(error.message);
  }
 };