module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    professorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Review.associate = (models) => {
    Review.hasMany(models.Professor, {
      foreignKey: 'professorId',
      onDelete: 'CASCADE',
    });
  };

  return Review;
};