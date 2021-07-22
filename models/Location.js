const { Model, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../config/connection");
// create our Location model
class Location extends Model {}
// create fields/columns for Location model
Location.init(
  {
    // TODO: configure columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location_name:{
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "location"
  }
);
module.exports = Location;