import "./styles.css";

const counter = document.getElementById("counter"),
  add = document.getElementById("add"),
  sab = document.getElementById("sub"),
  async = document.getElementById("async"),
  theme = document.getElementById("theme"),
  body = document.querySelector("body");

let state = 0;

const render = () => {
  counter.textContent = state.toString();
};

add.addEventListener('click', ()=>{
	state++;
	render();
})


sab.addEventListener('click', ()=>{
	state--;
	render();
})


theme.addEventListener('click', ()=>{
	body.classList.toggle('dark');
})


async.addEventListener('click', ()=>{
	setTimeout(() => {
		state++;
		render();
	}, 1000);
})