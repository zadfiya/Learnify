const mongoose = require('mongoose')

module.exports = {
  isLoggedIn: (req, res, next) => req.isAuthenticated() ? next() : res.status(403).json({ message: 'Log in to access' }),
  isValidId: (req, res, next) => mongoose.Types.ObjectId.isValid(req.params.id) ? next() : res.status(404).json({ message: 'Invalid ID' }),
  isTeacher: (req, res, next) => req.user.role === 'Teacher' ? next() : res.status(403).json({ message: 'Unauthorized' }),
}