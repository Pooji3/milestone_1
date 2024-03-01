const Order = require('../models/Order');

exports.placeOrder = async (foodId, userId, orderId) => {
  try {
    const newOrder = new Order({ foodId, userId, orderId });
    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (error) {
    console.error('Error placing order:', error);
    throw new Error('Error placing order');
  }
};