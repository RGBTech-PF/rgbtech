const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('comment', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profilePhoto: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
        timestamps: false
    });
  };