import User from "../models/userModel";



export const handleStart = (bot, chatId) => {
    bot.sendMessage(chatId, 'Select an action:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Create user: ', callback_data: 'create' }],
                [{ text: 'Login: ', callback_data: 'login' }]
            ],
        },
    });
};

export const handleCallbackQuery = (bot, chatId, data) => {
    switch (data) {
        case 'create':
            bot.sendMessage(chatId, 'Fill users fields', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Username", callback_data: 'fill_username' }],
                        [{ text: "Email", callback_data: 'fill_email' }],
                        [{ text: "Password", callback_data: 'fill_password' }],
                        [{ text: "Role", callback_data: 'fill_role' }]
                    ]
                }
            });
            break;
        case 'login':
            bot.sendMessage(chatId, 'Fill fields', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Email", callback_data: 'login_email' }],
                        [{ text: "Password", callback_data: 'login_password' }]
                    ]
                }
            });
            break;
    };
};