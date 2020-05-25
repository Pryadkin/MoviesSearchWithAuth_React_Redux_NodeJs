const { Router } = require('express');
const router = Router();
const User = require('../models/User');

// /movies/add
router.patch('/add', (req, res) => {
  const id = req.body.userId;
  const movies = req.body.movies;
  if (movies) {
    User.update({ _id: id }, { $set: { movies: req.body.movies } })
      .exec()
      .then(() => {
        res.status(200);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: err
        })
      });
  } else {
    User.findById(id)
      .exec()
      .then(data => {
        if (data) {
          res.status(200).json(data.movies);
        } else {
          res.status(404).json({
            message: 'No valid entry found for provided ID'
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }
});

module.exports = router;