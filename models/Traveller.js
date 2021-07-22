const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Traveller model
class Traveller extends Model {}
// create fields/columns for Traveller model
Traveller.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "traveller"
  }
);
module.exports = Traveller;