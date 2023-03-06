import { states, StateType } from "./states";

export class State {
	#state: StateType = states.MENU;

	get() {
		return this.#state;
	}

	set(newState: StateType) {
		this.#state = newState;
	}
}
