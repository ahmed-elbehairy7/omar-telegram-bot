import { Context, Markup } from "telegraf";

export default async function start(ctx: Context) {
	ctx.reply("choose an option", Markup.keyboard([]));
}
