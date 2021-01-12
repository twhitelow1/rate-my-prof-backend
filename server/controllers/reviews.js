const Review = require('../models').Review;

module.exports = {
  create(req, res) {
    return Review
      .create({
        professorId: req.params.professorId,
        rating: req.body.rating,
        text: req.body.text,
        reviewer: req.body.reviewer,
      })
      .then(review => res.status(201).send(review))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Review
      .findAll({
        where: {
          id: req.params.reviewId
        }
      })
      .then(review => {
        if (!review) {
          return res.status(404).send({
            message: 'Review Not Found',
          });
        }
        return res.status(200).send(review);
      })
      .catch(error => res.status(400).send(error));
  },
};