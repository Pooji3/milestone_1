exports.authenticateUser = async (email, password) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      if (user.password !== password) {
        throw new Error('Incorrect password');
      }
      return user;
    } catch (error) {
      console.error('Error authenticating user:', error);
      throw new Error('Authentication failed');
    }
  };