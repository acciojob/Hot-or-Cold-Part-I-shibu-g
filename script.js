//your code here

var btn=document.getElementById('btn');
var p=document.getElementById('num');
function f() {
	let no=Math.floor(Math.random()*20);
	p.textContent=no;
}
btn.addEventListener("click",f);