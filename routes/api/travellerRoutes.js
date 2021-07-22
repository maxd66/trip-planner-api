const router = require("express").Router();
const { Traveller, Location, Trip } = require('../../models');
// TODO: GET all travellers
router.get("/", async (req, res) => {
  try {
    const travellerData = await Traveller.findAll({
    });
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// TODO: GET a single traveller
router.get("/:id", async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{model: Location, through: Trip}],
    });
    if (!travellerData) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// TODO: CREATE a traveller
router.post("/", async (req, res) => {
  try {
    const travellerData = await Traveller.create(req.body);
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// TODO: DELETE a traveller
router.delete("/:id", async (req, res) => {
  try {
    const travellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!travellerData) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;