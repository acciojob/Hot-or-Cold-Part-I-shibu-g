//your code here

var btn=document.getElementById('btn');
var p=document.getElementById('num');

var res=document.getElementById('respond');
var inp=document.getElementById('guess').value;

function f() {
	let no=Math.floor(Math.random()*20);
	p.textContent=no;
	var inp=document.getElementById('guess').value;
    if(Number(inp)-no<=5){
		res.textContent="Hot";
	}else{
		res.textContent="Cold";
	}
}
btn.addEventListener("click",f);