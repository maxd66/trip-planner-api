const router = require("express").Router();
const { Trip, Traveller, Location } = require("../../models");

// TODO: CREATE a trip
router.post("/", async (req, res) => {
    try {
        const tripData = await Trip.create(req.body)
        res.json(tripData);
    } catch(err) {console.log(err)}
});

// TODO: DELETE a trip
router.delete("/:id", async (req, res) => {
    try {
        const tripData = await Trip.destroy({where: {id: req.params.id}})
        res.json(tripData);
    } catch(err) {console.log(err)}
});

module.exports = router;
