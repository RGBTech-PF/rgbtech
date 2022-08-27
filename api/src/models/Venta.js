const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('venta', {
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
    Date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      }
  },{
    timestamps: false
  })}