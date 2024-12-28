import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { config } from "dotenv";
import start from "./start";
import help from "./help";
import call from "./call";

config();
const bot = new Telegraf(process.env.API_TOKEN);

bot.start(start);
bot.help(help);
bot.action("testing", start);
bot.command("call", call);
bot.launch();
console.log("running...");

bot.action("menu", (ctx) => ctx.reply("hello option 1"));

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
