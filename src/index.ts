import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { config } from "dotenv";
import start from "./start";
import help from "./help";
import call from "./call";

config();
const bot = new Telegraf(process.env.API_TOKEN as string);

bot.start(start);
bot.help(help);
bot.command("call", call);
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();
console.log("running...");

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
