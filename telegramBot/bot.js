import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

import * as handler from './botHandlers.js'

dotenv.config();

const bot = new TelegramBot(process.env.TOKEN, {polling: true});

bot.on('message', (msg)=>{
    const chatId = msg.chat.id;
    const text = msg.text;
   
    if(text === '/start'){
        handler.handleStart(bot,chatId);
    }

});

bot.on('callback_query', (query)=>{
    const chatId = query.message.chat.id;
    const data = query.data;

    handler.handleCallbackQuery(bot,chatId,data);

});

export default bot;