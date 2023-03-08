import { postArr } from "../model/posts";
import { usersArr } from "../model/users";
import { Post, User } from "../types/posts.types";

export function getAllPosts(): Post[] {
	// Normally it's not advised to hard-code all your data!
	// in the absence of a true Model layer, our service can simply return a hard-coded array of posts

	return postArr;
}

export function postNewPost(title: string, text: string, authorId: string) {
	// Validation necessary for future!
	postArr.push(
		{
			title: title,
			id: (postArr.length + 1).toString(),
			text: text,
			author: (usersArr.find(user => user.id === authorId) ? usersArr.find(user => user.id === authorId) : usersArr[0]) as User,
		}
	);

	return postArr[postArr.length - 1];
}
