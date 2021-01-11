import "./styles.css";
import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './redux/rootReducer'
import {increment, decrement, async} from './redux/actions'
import thunk from 'redux-thunk'

const counter = document.getElementById("counter"),
  add = document.getElementById("add"),
  sab = document.getElementById("sub"),
  asyncBtn = document.getElementById("async"),
  theme = document.getElementById("theme");

const store = createStore(rootReducer, 10, applyMiddleware(thunk));

window.store = store;

add.addEventListener('click', ()=>{
	store.dispatch(increment())
})


sab.addEventListener('click', ()=>{
	store.dispatch(decrement())
})


asyncBtn.addEventListener('click', ()=>{
	store.dispatch(async())
})


store.subscribe(()=> {
	const state = store.getState();
	counter.textContent = state;
})

store.dispatch({type:'INIT '})