const express = require("express");
require('dotenv').config();
const router = express.Router();
const Workout = require('../models/workoutModels')

// get all
router.get("/",async (req, res) => {
    try {
        const workouts = await Workout.find({});
        res.json({
            error: workouts,
            statusCode: 200,
        })
    } catch (error) {
        res.json({
            error: error.message,
            statusCode: 500,
        })
    }
});

// get single
router.get("/:id", (req, res) => {
  res.json({
    mssg: `Get single workouts`,
  });
});

// create
router.post("/", async (req, res) => {
    const {title,load,reps} = req.body;
    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout);
    } catch (error) {
        res.json({
            error: error.message,
            statusCode: 500,
        })
    }
  });

// update
router.patch("/:id", (req, res) => {
    res.json({
      mssg: "Update workouts",
    });
  });

// delete
router.delete("/:id", (req, res) => {
    res.json({
      mssg: "Delete workouts",
    });
  });

module.exports = router;
