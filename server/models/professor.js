module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define('Professor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    school: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Professor.associate = (models) => {
    Professor.hasMany(models.Review, {
      foreignKey: 'professorId',
      as: 'reviews',
    });
  };

  return Professor;
};