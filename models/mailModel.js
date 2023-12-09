import mongoose from 'mongoose';

const mailSchema = mongoose.Schema({
    senderEmail: {
        type: String,
    },
    recipientEmail: {
        type: String,
    },
    subject: {
        type: String,
    },
    emailTxt: {
        type: String,
    },
    date: {
        type: Date,
    },
});

const Mail = mongoose.model('Mail', mailSchema);

export default Mail;
