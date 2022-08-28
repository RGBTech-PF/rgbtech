const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"user",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			user: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			mail: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			userVerificate: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			profilePhoto: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			cartShop: {
				type: DataTypes.JSONB,
			},
			favorite: {
				type: DataTypes.JSONB,
				allowNull: true,
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			shoppingHistory: { 
				type: DataTypes.JSONB,
				defaultValue: [],
			},
		},
		{
			timestamps: false,
		}
	);
};
