import donetnv from 'dotenv';
import mongoose from 'mongoose';

donetnv.config();

async function run() {
    try {
        mongoose.connect(process.env.DATABASE);
        console.log('DB is connected');
    } catch (err) {
        console.log(err);
    }
}

run();
