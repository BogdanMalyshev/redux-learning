
export function createStore(rootReducer, initialState){

	const	subscribers = [];
	let state = rootReducer( {type:'__INITIAL__'}, initialState);

	return{
		dispatch(action){
			state = rootReducer(action, state);
			subscribers.forEach(sub => sub()); 
		},
		subscribe(callback){
			subscribers.push(callback)
		},
		getState(){
			return state
		}
	}
}