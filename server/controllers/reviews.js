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
  list(req, res) {
    return Review
      .findAll()
      .then(reviews => res.status(200).send(reviews))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
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
        return Review
          .update({
            professorId: req.body.professorId || review.professorId,
            rating: req.body.rating || review.rating,
            text: req.body.text || review.text,
            reviewer: req.body.reviewer || review.reviewer,
          }, {
            where: {
              id: req.params.reviewId
            }
          })
          .then(() => res.status(200).send(review))  // Send back the updated professor.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};