import { sendNewPost } from "../../../api/send_new_post";
import { print, printNewLine, prompt } from "../../../ui/console";

export async function addNewPost() {
	const title = await prompt("What is the new post Title? ");
    const text = await prompt("What is the new post text? ")
	const userId = await prompt("What is the ID of the author? ")

	printNewLine();
	print(`📨 Adding Post: "${title}"...`);

	const success = await sendNewPost(title, text, userId);

	if (success === true) print("🥳 Post created successfully!");
	else print("😵 Failed to create new post.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
}
