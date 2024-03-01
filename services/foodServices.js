const Food = require('../models/Food');

exports.getAllFood = async () => {
  try {
    const allFood = await Food.find();
    return allFood;
  } catch (error) {
    console.error('Error fetching food items:', error);
    throw new Error('Error fetching food items');
  }
};