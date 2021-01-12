const professorsController = require('../controllers').professors;
const reviewsController = require('../controllers').reviews;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Rate My Professor API!',
  }));

  app.post('/api/professors', professorsController.create); // Add A Professor
  app.get('/api/professors', professorsController.list); // Get all Professors
  app.get('/api/professors/:professorId', professorsController.retrieve); // Get Professor by Id
  app.put('/api/professors/:professorId', professorsController.update);  // Update Professor by Id
  app.delete('/api/professors/:professorId', professorsController.destroy);  // Delete Professor by Id

  app.post('/api/professors/:professorId/reviews', reviewsController.create); // Add Review 
  app.get('/api/reviews/:reviewId', reviewsController.retrieve); // Add Review 
  app.put('/api/reviews/:reviewId', reviewsController.update); // Add Review 
  app.get('/api/reviews', reviewsController.list); // Get all Reviews

};