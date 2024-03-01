// const express = require('express');
// const router = express.Router();
// const orderController = require('../controller/orderController');

// router.post('/place-order', orderController.placeOrder);

// module.exports = router;
// orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const stripe = require('stripe')('your_stripe_secret_key');

// Route for processing payments and creating orders
router.post('/checkout', async (req, res) => {
  const { userId, foodId, amount, currency, token } = req.body;

  try {
    // Create a charge using Stripe
    const charge = await stripe.charges.create({
      amount,
      currency,
      source: token,
      description: 'Payment for food order',
    });

    // Create a new order in the database
    const order = new Order({
      userId,
      foodId,
      amount,
      paymentDetails: charge,
      // Other order details
    });
    await order.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
});

module.exports = router;
