const router = require("express").Router();
const { Traveller, Location,Trip } = require('../../models');
// TODO: GET all locations
router.get("/", async (req, res) => {
   Location.findAll().then((locationData) => {
       res.json(locationData);
   })
});
// TODO: GET a single location
router.get("/:id", async (req, res) => {
    Location.findByPk(req.params.id).then((locationData) => {
        res.json(locationData);
      });
});
// TODO: CREATE a location
router.post("/", async (req, res) => {
    Location.create(req.body)
    .then((locationData) => {
      res.json(locationData);
    })
    .catch((err) => {
      res.json(err);
    });
});
// TODO: DELETE a location
router.delete("/:id", async (req, res) => {
    const deletedLocation = await Location.destroy({
        where: {
          location_id: req.params.location_id,
        },
      });
      res.json(deletedLocation);
});
module.exports = router;