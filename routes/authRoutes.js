import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

/**
 * @openapi
 * '/api/auth/register':
 *   post:
 *     tags:
 *       - User
 *     summary: Create a user
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 default: Example_Username
 *               email:
 *                 type: string
 *                 default: example@mail.com
 *               password:
 *                 type: string
 *                 default: password123
 *               role:
 *                 type: string
 *                 default: user
 *     responses: 
 *       201: 
 *         description: Created a new user
 *       400: 
 *         description: Bad Request
 */
router.post('/auth/register', authController.register);
/**
 * @openapi
 * '/api/auth/login':
 *   post:
 *     tags:
 *       - User
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 default: example@mail.com
 *               password:
 *                 type: string
 *                 default: password123
 *     responses: 
 *       200: 
 *         description: User logined
 *       400: 
 *         description: Bad Request
 */
router.post('/auth/login', authController.login);

export default router;