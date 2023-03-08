import { baseUrl } from "./base_url";

export async function sendNewPost(title: string, text: string, userId: string) {
	try {
		const result = await fetch(baseUrl + "/api/posts/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ 
                title: title,
                text: text,
				userId: userId
             }),
		});

		const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}