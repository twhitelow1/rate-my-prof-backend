const professorsController = require('../controllers').professors;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Rate My Professor API!',
  }));

  app.post('/api/professors', professorsController.create);
  app.get('/api/professors', professorsController.list);

};