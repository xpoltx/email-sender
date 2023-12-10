import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

//DB
import './config/db.js';
//Routes
import authRouter from './routes/authRoutes.js';
import mailsendRouter from './routes/mailsendRoutes.js';

//Telegram bot
import bot from './telegramBot/bot.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/api', authRouter);

app.use('/api', mailsendRouter);

app.listen(process.env.PORT, () => {
    console.log(`http://localhost/${process.env.PORT}`);
});
