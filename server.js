import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

//DB
import './config/db.js';
//Routes
import authRouter from './routes/authRoutes.js';
import mailsendRouter from './routes/mailsendRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/api', authRouter);

app.use('/api', mailsendRouter);

// nodemailer.createTestAccount((err,account)=>{
//     if(err){
//         console.error('Error creating test account', err);
//         return;
//     }

//     const transporter = nodemailer.createTransport({
//         host: account.smtp.host,
//         port: account.smtp.port,
//         secure: account.smtp.secure,
//         auth: {
//             user: account.user,
//             pass: account.pass,
//         },
//     });

//     const mailOptions = {
//         from: 'spoltoratsk@gmail.com',
//         to: '123.@email.com',
//         subject: 'Dobriy veshir',
//         text: 'My z Ukrainy',
//     };

//     transporter.sendMail(mailOptions, (error, info)=>{
//         if(error){
//             console.error('Error sending mess', error);
//         }else {
//             console.log('Mess sent', info.response);

//             console.log('Test URL:', nodemailer.getTestMessageUrl(info));
//         }
//     });

// });

app.listen(process.env.PORT, () => {
    console.log(`http://localhost/${process.env.PORT}`);
});
