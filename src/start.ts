import { Context } from "telegraf";

export default async function start(ctx: Context) {
	ctx.reply("Hello, world");
}
