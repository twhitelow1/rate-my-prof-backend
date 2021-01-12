const professorsController = require('../controllers').professors;
const reviewsController = require('../controllers').reviews;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Rate My Professor API!',
  }));

  app.post('/api/professors', professorsController.create);
  app.get('/api/professors', professorsController.list);

  app.post('/api/professors/:professorId/reviews', reviewsController.create);
};