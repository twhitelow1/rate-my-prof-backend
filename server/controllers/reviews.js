const Review = require('../models').Review;

module.exports = {
  create(req, res) {
    return Review
      .create({
        professorid: req.params.professorId,
        rating: req.body.rating,
        text: req.body.text,
        reviewer: req.body.reviewer,
      })
      .then(review => res.status(201).send(review))
      .catch(error => res.status(400).send(error));
  },
};