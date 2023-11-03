import express from 'express'
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send({
    status: 'OK',
    message: 'Server is ready.'
  }
)});
router.post('/auth', authUser)
router.post('/register', registerUser)
router.post('/logout', logoutUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)

export default router