const Professor = require('../models').Professor;

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
};