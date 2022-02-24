const router = require("express").Router();
const Shipment = require("../models/shipmentModel");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const {
      itemName,
      trackingId,
      location,
      time,
      date,
      sender,
      receiver,
      status,
    } = req.body;

    const newShipment = new Shipment({
      itemName,
      trackingId,
      location,
      time,
      date,
      sender,
      receiver,
      status,
    });

    const savedShipment = await newShipment.save();

    res.json(savedShipment);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.json(shipments);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
