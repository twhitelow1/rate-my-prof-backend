module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Professors', [{
      name: 'John Mayer',
      title: 'Professor',
      school: 'School of Rock',
      department: 'Vocals',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jerry Garcia',
      title: 'Lead Professor',
      school: 'School of Rock',
      department: 'Guitar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jerry Garcia',
      title: 'Lead Professor',
      school: 'School of Rock',
      department: 'Guitar',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Professors', null, {});
  }
};