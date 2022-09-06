const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('award', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    specifications: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    img:{
      type: DataTypes.STRING
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    freeShipping: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    timestamps: false
  })
}