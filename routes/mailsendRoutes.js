import express from 'express';
import * as mailController from '../controllers/mailController.js';
import checkAdmin from '../middlewares/checkAdmin.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = express.Router();

router.use(checkAuth);
router.post('/mail/send', checkAdmin, mailController.sendMail);

export default router;
