const TelegramBot = require('node-telegram-bot-api')

const token = '';
const webAppUrl = '';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'button below', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Form', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
})