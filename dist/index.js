"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const filters_1 = require("telegraf/filters");
const dotenv_1 = require("dotenv");
const start_1 = __importDefault(require("./start"));
const help_1 = __importDefault(require("./help"));
const call_1 = __importDefault(require("./call"));
(0, dotenv_1.config)();
const bot = new telegraf_1.Telegraf(process.env.API_TOKEN);
bot.start(start_1.default);
bot.help(help_1.default);
bot.command("call", call_1.default);
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on((0, filters_1.message)("sticker"), (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();
console.log("running...");
// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
