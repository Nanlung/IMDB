const Movie = require('../models/movie.model');

exports.create = (req, res) => {
  const movie =  {
    movie_id: req.body.movie_id,
    movie_title: req.body.movie_title,
    movie_year: req.body.movie_year,
    movie_time: req.body.movie_time,
    movie_language: req.body.movie_language,
    movie_date_release: req.body.movie_date_release
  }
  Movie.create(movie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding movie."
      });
    });
};

// find all controller
exports.findAll = async(req,res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).send(movies);
  } catch (error) {
    console.error(error.message);
  }
 };