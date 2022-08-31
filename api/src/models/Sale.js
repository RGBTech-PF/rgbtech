const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('sale', {
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
      },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    amount : {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    timestamps: false
  })}