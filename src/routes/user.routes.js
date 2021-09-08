import express  from 'express';
const router = express.Router();

import userController  from '../controllers/user.controller.js';



router.get('/usersinfo', userController.findAll);
router.get('/usersinfo/:id', userController.findById);

export default router;
// module.exports = router;

