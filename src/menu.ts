import { Context } from "telegraf";
import { ActionData } from "./global";

export const menuActionData: ActionData = {
	action_id: "MENU_ACTION",
	text: "القائمة",
};

export default async function menuAction(ctx: Context) {
	ctx;
}

type Teacher = {
	id: string;
	name: string;
	phone: string;
	acheivments?: [string];
	courses: [Course];
};

type Course = {
	language: "en" | "ar" | "ma";
	subject: "عربية" | "مالاوية";
};
