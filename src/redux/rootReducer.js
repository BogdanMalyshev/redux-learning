import {INCREMENT, DECREMENT, THEME} from './types'
import {combineReducers} from "redux";

function counterReducer(state=0, action) {
	switch (action.type) {
		case INCREMENT:
		  return state + 1
		case DECREMENT:
			return state - 1
		default:
		  return state
	 }

	return state
}
function themeReducer(state='light', action) {
	switch (action.type) {
		case THEME:
		  return state = state === 'light' ? 'dark': 'light'
		default:
		  return state
	 }

	return state
}

export const rootReducer = combineReducers(
	{counter: counterReducer, theme: themeReducer}
	)