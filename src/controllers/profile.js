import User from "../Models/userModel.js"
import Profile from "../Models/profileModel.js"

export const getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password'); // Exclude the password
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };