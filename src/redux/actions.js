import {INCREMENT, DECREMENT, THEME} from './types'

export function increment(){
	return {type: INCREMENT}
}
export function decrement(){
	return {type: DECREMENT}
}
export function changetheme(){
	return {type: THEME}
}
export function async(){
	return function (dispatch){
		 setTimeout(() => {
			dispatch({type: INCREMENT})
		 }, 1000);
	}
}