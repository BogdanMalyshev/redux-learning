import "./styles.css";
import {createStore} from './createStore'
import {rootReducer} from './redux/rootReducer'

const counter = document.getElementById("counter"),
  add = document.getElementById("add"),
  sab = document.getElementById("sub"),
  async = document.getElementById("async"),
  theme = document.getElementById("theme"),
  body = document.querySelector("body");

const store = createStore(rootReducer, {current:0, theme:'light'});

add.addEventListener('click', ()=>{
	store.dispatch({type:'INCREMENT'})
})


sab.addEventListener('click', ()=>{
	store.dispatch({type:'DICREMENT'})
})


theme.addEventListener('click', ()=>{
	store.dispatch({type:'THEME'})
})


async.addEventListener('click', ()=>{

})


store.subscribe(()=> {
	const {current} = store.getState();

	counter.textContent = current;
})

store.dispatch({type:'INIT '})