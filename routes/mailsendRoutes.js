import express from 'express';
import * as mailController from '../controllers/mailController.js';
import checkAdmin from '../middlewares/checkAdmin.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = express.Router();

router.use(checkAuth);
/**
 * @openapi
 * '/api/mail/send':
 *   post:
 *     tags:
 *       - Mail
 *     summary: Create a mail, send it to recipients
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               recipient:
 *                 type: string
 *                 default: test_mail@mail.com
 *               subject:
 *                 type: string
 *                 default: Testing mail sender
 *               emailTxt:
 *                 type: string
 *                 default: Lorem ipsum dolor sit amet.
 *     responses: 
 *       200: 
 *         description: Mail was created, saved into BD and sent to recipient
 *       400: 
 *         description: Bad Request
 */
router.post('/mail/send', checkAdmin, mailController.sendMail);

export default router;
