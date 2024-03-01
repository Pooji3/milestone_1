const Food = require('../models/Food');

exports.getAllFood = async (req, res) => {
  try {
    const allFood = await Food.find();
    res.status(200).json(allFood);
  } catch (error) {
    console.error('Error fetching food items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};