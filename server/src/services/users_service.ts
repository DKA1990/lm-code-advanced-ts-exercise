import { usersArr } from "../model/users";
import { User } from "../types/posts.types";

export function getAllUsers(): User[] {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users

	return usersArr;
}

export function postNewUser(userName: string) {
// Validation necessary for future!
	usersArr.push(
	{
		// If users can ever be deleted this will become an issue!
		id: (usersArr.length + 1).toString(),
		name: userName,
		creationDate: new Date(),
	});

	return usersArr[usersArr.length - 1];
}
