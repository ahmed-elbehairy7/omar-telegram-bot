from os import getenv
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import (
    Application,
    CommandHandler,
    MessageHandler,
    filters,
    ContextTypes,
)

load_dotenv()


async def start_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    print("someone started the bot")
    await update.message.reply_chat_action()


if __name__ == "__main__":
    print("Starting...")
    app = Application.builder().token(getenv("API_TOKEN")).build()
    app.add_handler(CommandHandler("start", start_command))

    print("polling...")
    app.run_polling(4)
