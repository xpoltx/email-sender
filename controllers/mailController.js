import nodemailer from 'nodemailer';
import Mail from '../models/mailModel.js';

export const sendMail = (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            return res.status(500).json(err);
        }

        Mail.create({
            senderEmail: req.user.email,
            recipientEmail: req.body.recipient,
            subject: req.body.subject,
            emailTxt: req.body.emailTxt,
            date: new Date(),
        })
            .then((mail) => {
                const transporter = nodemailer.createTransport({
                    host: account.smtp.host,
                    port: account.smtp.port,
                    secure: account.smtp.secure,
                    auth: {
                        user: account.user,
                        pass: account.pass,
                    },
                });
                const mailOptions = {
                    from: mail.senderEmail,
                    to: mail.recipientEmail,
                    subject: mail.subject,
                    text: mail.emailTxt,
                };

                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        return res.status(500).json(err);
                    } else {
                        console.log(info);
                        return res
                            .status(200)
                            .json({
                                'Test URL ': nodemailer.getTestMessageUrl(info),
                            });
                    }
                });
            })
            .catch((err) => {
                return res.status(500).json(err);
            });
    });
};
