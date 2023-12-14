import User from "../models/userModel.js";
import Mail from "../models/mailModel.js";

import bcrypt from 'bcrypt';
import {Telegraf, Markup} from "telegraf";
import dotenv from 'dotenv';
dotenv.config();

let currentUser = {};

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx)=>{
    ctx.reply('Welcome! Choose an option: ', Markup.keyboard([
        ['/register'],
        ['/login'],
        ['/send-mail']
    ]).resize().extra());
});

function handleMail(ctx){
    const userData = ctx.message.text.split(',').map((data)=>data.trim());

    const sender = currentUser[ctx.chat.id].email;
    const recipientEmail = userData[0];
    const subject = userData[1];
    const emailTxt = userData[2];

    

}

bot.on('text', (ctx) =>{
    
    
    const userData = ctx.message.text.split(',').map((data)=>data.trim());

    const username = userData[0];
    const email = userData[1];
    const password = userData[2];
    const role = userData[3] || 'user';

    try {
        bcrypt.hash(password, 10).catch((err)=>{
            console.log(err);
            ctx.reply('Error while hashing password');
        }).then((hash)=>{
            User.create({
                username: username,
                password: hash,
                email: email,
                role: role
            }).then((user)=>{
                ctx.reply('Registration finished successfully\n' +
                user.username + '\n' + user.email + '\n' + user.role + '\n');
            })
        })
    } catch (error) {
        console.log(error);
    }   

});

export default bot.launch();
// import TelegramBot from "node-telegram-bot-api";
// import dotenv from "dotenv";

// import * as handler from './botHandlers.js'

// dotenv.config();

// const bot = new TelegramBot(process.env.TOKEN, {polling: true});

// bot.on('message', (msg)=>{
//     const chatId = msg.chat.id;
//     const text = msg.text;
   
//     if(text === '/start'){
//         handler.handleStart(bot,chatId);
//     }

// });

// bot.on('callback_query', (query)=>{
//     const chatId = query.message.chat.id;
//     const data = query.data;

//     handler.handleCallbackQuery(bot,chatId,data);

// });

// export default bot;