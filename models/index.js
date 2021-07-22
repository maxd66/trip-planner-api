const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

// TODO: Setup many-to-many relationship
Traveller.belongsToMany(Location, {
    through: Trip,
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE'
})

Location.belongsToMany(Traveller, {
    through: Trip,
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
})

module.exports = { Traveller, Location, Trip };
