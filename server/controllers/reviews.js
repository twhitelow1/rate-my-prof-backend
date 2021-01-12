const Review = require('../models').Review;

module.exports = {
  create(req, res) {
    return Review
      .create({
        professorid: req.body.professorid,
        rating: req.params.rating,
        text: req.params.text,
        reviewer: req.params.reviewer,
      })
      .then(review => res.status(201).send(review))
      .catch(error => res.status(400).send(error));
  },
};