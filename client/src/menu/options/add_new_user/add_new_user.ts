import { sendNewUser } from "../../../api/send_new_user";
import { print, printNewLine, prompt } from "../../../ui/console";

export async function addNewUser() {
	const userName = await prompt("What is the new users Username? ");

	printNewLine();
	print(`📨 Adding User: "${userName}"...`);

	const success = await sendNewUser(userName);

	if (success === true) print("🥳 User created successfully!");
	else print("😵 Failed to create new user.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
}
