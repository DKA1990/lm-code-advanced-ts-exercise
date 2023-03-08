export const states = {
	MENU: "MENU" as const,

	SEND_MESSAGE: "SEND_MESSAGE"  as const,

	SHOW_POSTS: "SHOW_POSTS"  as const,
	SHOW_USERS: "SHOW_USERS"  as const,
	BROWSE_POSTS: "BROWSE_POSTS"  as const,
	ADD_POST: "ADD_POST" as const,

	ADD_USER: "ADD_USER"  as const,

	CABBAGE: "CABBAGE" as const,

	UNKNOWN: "UNKNOWN"  as const,
};

export type StateType = keyof typeof states;