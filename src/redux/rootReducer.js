export function rootReducer(action, state) {
	
	if(action.type === 'INCREMENT'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.current += 1;
		return newState
	}else if(action.type=== 'DICREMENT'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.current -= 1;
		return newState
	}
	else if(action.type=== 'THEME'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.theme = newState.theme ==='light' ? 'dark':'light';
		return newState
	}

	return state

}