module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Professors', [{
      name: 'Stevie Ray Vaughn',
      title: 'PhD.',
      school: 'School of Rock',
      department: 'Riffs',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jimi Hendrix',
      title: 'MD.',
      school: 'School of Rock',
      department: 'Riffs',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mozart',
      title: 'Prof.',
      school: 'Classical Academy',
      department: 'Piano',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Beethoven',
      title: 'PhD.',
      school: 'Classical Academy',
      department: 'Piano',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jack Black',
      title: 'Pres.',
      school: 'School of Rock',
      department: 'Everything',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Yo-Yo Ma',
      title: 'Pres.',
      school: 'Classical Academy',
      department: 'Violin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'B. B. King',
      title: 'Pres.',
      school: 'College of Blues',
      department: 'Vocals',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Clarence Carter',
      title: 'Prof.',
      school: 'College of Blues',
      department: 'Guitar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Freddie King',
      title: 'Prof.',
      school: 'College of Blues',
      department: 'Guitar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
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
    }]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Professors', null, {});
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      professorId: '1',
      rating: '5',
      text: 'Good lecturer, good person.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '1',
      rating: '4',
      text: 'Okay lecturer, fun person, this class ROCKS',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '2',
      rating: '2',
      text: 'Cool class but not a cool dude, wouldnt recommend',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '3',
      rating: '5',
      text: 'Cool class but kinda weird guy, would recommend though',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '4',
      rating: '1',
      text: 'Guy was way too intense',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '4',
      rating: '3',
      text: 'Very intense, but I learned a ton and got better.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '5',
      rating: '3',
      text: 'Sad stuff man',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '5',
      rating: '3',
      text: 'Breaks my heart brother, that voice is incredible',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '5',
      rating: '5',
      text: 'No homework, super chill',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '6',
      rating: '4',
      text: 'Lots of homework, not super chill but overall fun teacher',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '6',
      rating: '3',
      text: 'Not worth taking unless him unless you need to for a major requirement',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '7',
      rating: '3',
      text: 'Super intense, but I didnt even learn a lot and got minimally better.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '7',
      rating: '2',
      text: 'Cool professor but kind of a waste of time, wouldnt recommend though',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '8',
      rating: '5',
      text: 'No projects, no grades, no homework, electric',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '8',
      rating: '5',
      text: 'Best I ever had, best theres ever been',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '9',
      rating: '2',
      text: 'Boring class fun teacher',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '9',
      rating: '4',
      text: 'Totally worth taking if it fits your schedule',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '10',
      rating: '5',
      text: 'Jerry is the MAN!',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      professorId: '11',
      rating: '5',
      text: 'Best guitarist alive today. Great prof too!',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Professors', null, {});
  }
};