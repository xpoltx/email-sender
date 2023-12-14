import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

import Telegraf from "telegraf";


// let newUserStates = {};

// export const handleStart = (bot, chatId) => {
    
//     bot.sendMessage(chatId, 'Select an action:', {
//         reply_markup: {
//             inline_keyboard: [
//                 [{ text: 'Create user: ', callback_data: 'create' }],
//                 [{ text: 'Login: ', callback_data: 'login' }]
//             ],
//         },
//     });
// };

// export const handleCallbackQuery = (bot, chatId, msg) => {
//     switch (msg) {
//         case 'create':
//             newUserStates[chatId] = {};
//             sendNextQuestion(bot, chatId, 'Enter username', 'fill_username');
//             break;
//         case 'login':
//             bot.sendMessage(chatId, 'Fill fields', {
//                 reply_markup: {
//                     inline_keyboard: [
//                         [{ text: "Email", callback_data: 'login_email' }],
//                         [{ text: "Password", callback_data: 'login_password' }]
//                     ]
//                 }
//             });
//             break;
//         case 'fill_username': 
//             newUserStates[chatId].username = msg.data;
//             sendNextQuestion(bot, chatId, 'Enter email', 'fill_email');
//             break;
//         case 'fill_email': 
//             newUserStates[chatId].email = msg.data;
//             sendNextQuestion(bot, chatId, 'Enter password', 'fill_password');
//             break;
//         case 'fill_password': 
//             newUserStates[chatId].password = msg.data;
//             sendNextQuestion(bot, chatId, 'Enter role', 'fill_role');
//             break;
//         case 'fill_role': 
//             newUserStates[chatId].role = msg.data;
//             bcrypt.hash(newUserStates[chatId].password, 10).catch(err=>{
//                 bot.sendMessage(chatId,err);
//             }).then((hash)=>{
//                 User.create({
//                     username: newUserStates[chatId].username,
//                     password: hash,
//                     email: newUserStates[chatId].email,
//                     role: newUserStates[chatId].role
//                 }).then((user)=>{
//                     bot.sendMessage('User successfully created');
//                     bot.sendMessage(`Username: ${user.username}\nEmail: ${user.email}\nRole: ${user.role}\n`)
//                     delete newUserStates[chatId];
//                     handleStart(bot,chatId);
//                 }).catch(err=>{
//                     bot.sendMessage(chatId,err);
//                 });
//             })
//             break;
//     };
// };

// function sendNextQuestion(bot,chatId, questionText, callback_data){
//     bot.sendMessage(chatId, questionText, {
//         reply_markup: {
//             inline_keyboard: [
//                 [{text: 'Next field', callback_data: callback_data}]
//             ]
//         }
//     });
// }