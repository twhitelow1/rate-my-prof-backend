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
      .findAll({
        where: {
          id: req.params.professorId
        },
        include: [{
          model: Review, as: 'reviews',
        }]
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
  update(req, res) {
    return Professor
      .findAll({
        where: {
          id: req.params.professorId
        }
      })
      .then(professor => {
        if (!professor) {
          return res.status(404).send({
            message: 'Professor Not Found',
          });
        }
        return Professor
          .update({
            name: req.body.name || professor.name,
            title: req.body.title || professor.title,
            school: req.body.school || professor.school,
            department: req.body.department || professor.department,
          }, {
            where: {
              id: req.params.professorId
            }
          })
          .then(() => res.status(200).send(professor))  // Send back the updated professor.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Professor
      .findAll({
        where: {
          id: req.params.professorId
        }
      })
      .then(professor => {
        if (!professor) {
          return res.status(400).send({
            message: 'Professor Not Found',
          });
        }
        return Professor
          .destroy()
          .then(() => res.status(204).send('Professor successfully deleted'))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};