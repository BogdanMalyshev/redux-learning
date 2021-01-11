import "./styles.css";
import {createStore, applyMiddleware, compose} from 'redux'
import {rootReducer} from './redux/rootReducer'
import {increment, decrement, async, changetheme} from './redux/actions'
import thunk from 'redux-thunk'
import {logger} from "redux-logger/src";

const counter = document.getElementById("counter"),
  add = document.getElementById("add"),
  sab = document.getElementById("sub"),
  asyncBtn = document.getElementById("async"),
  themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, compose(
	applyMiddleware(thunk,logger),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

window.store = store;

add.addEventListener('click', ()=>{
	store.dispatch(increment())
})


sab.addEventListener('click', ()=>{
	store.dispatch(decrement())
})

themeBtn.addEventListener('click', ()=>{
	store.dispatch(changetheme())
})


asyncBtn.addEventListener('click', ()=>{
	store.dispatch(async())
})


store.subscribe(()=> {
	const state = store.getState();
	counter.textContent = state.counter;
	document.querySelector('body').className = state.theme
})

store.dispatch({type:'INIT '})