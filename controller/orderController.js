const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { foodId, userId, orderId } = req.body;
    const newOrder = new Order({ foodId, userId, orderId });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};