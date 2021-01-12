const Professor = require('../models').Professor;
const Review = require('../models').Review;

module.exports = {
  create(req, res) {
    return Professor
      .create({
        name: req.body.name,
        title: req.body.title,
        school: req.body.school,
        department: req.body.department,
      })
      .then(professor => res.status(201).send(professor))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Professor
      .findAll({
        include: [{
          model: Review,
          as: 'reviews',
        }]
      })
      .then(professors => res.status(200).send(professors))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Professor
      .findById(req.params.professorId, {
        include: [{
          model: Review,
          as: 'reviews',
        }],
      })
      .then(professor => {
        if (!professor) {
          return res.status(404).send({
            message: 'Professor Not Found',
          });
        }
        return res.status(200).send(professor);
      })
      .catch(error => res.status(400).send(error));
  },
};