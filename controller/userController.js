// const User = require('../models/User');

// exports.registerUser = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const newUser = new User({ email });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// Assuming you're using Mongoose for MongoDB interaction
const User = require('../models/User'); // Assuming you have a User model

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body; // Assuming email and password are passed in the request body

    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user
    user = new User({
      email,
      password // You should hash the password before storing it in the database
    });

    await user.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; // Assuming email and password are passed in the request body

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Validate password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate JWT token and send it in response
    const token = generateToken(user); // You need to implement this function

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};