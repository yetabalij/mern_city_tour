import TourModel from "../models/tour.js";

export const createTour = async (req, res) => {
  const tour = req.body;
  const newTour = new TourModel({
    ...tour,
    createdAt: new Date().toISOString(),
  });
  try {
    await newTour.save();
    req.status(201).json(newTour);
  } catch (error) {
    res.status(400).json({ message: "something is wrong" });
  }
};

export const getTours = async (req, res) => {
  try {
    const tours = await TourModel.find();
    res.status(200).json(tours);
  } catch (error) {
    res.status(400).json({ message: "something is wrong" });
  }
};
