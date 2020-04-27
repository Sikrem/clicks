alert('Make money, buy stars. (Coin = money,')
let title = document.getElementsByTagName('h1');
let click = document.getElementsByTagName('div');
let lol = document.getElementsByTagName('h2');
let k = 0;
let u = 25;
let s = 0;
let sc = 500;
let level = 1;
click[0].addEventListener("click", function(){
	k = k + level;
	title[0].innerHTML = 'Money: '+k;
});
click[1].addEventListener("click", function(){
	lol[0].innerHTML = 'UPGRADE: '+u;
	if (k >= u) {
		k -= u;
		u = parseInt(u + 0.35*u);
		level += 1;
		title[0].innerHTML = 'Money: '+k;
		lol[0].innerHTML = 'UPGRADE: '+u;
	}
});
click[2].addEventListener("click", function(){
	lol[1].innerHTML = 'STAR COST '+sc;
	check:
	if (s === 3) {
		alert('NO MORE STARS');
		lol[1].innerHTML = 'NO STARS';
		break check;
	}
	if (k >= sc) {
		k -= sc;
		sc = parseInt(sc + 1000)
		s += 1;
		title[0].innerHTML = 'Money: '+k;
		if (s == 3) {
			lol[1].innerHTML = 'NO STARS ';
		}
		if (s < 3){
			lol[1].innerHTML = 'STAR COST: '+sc;
		}
	}
	
});
click[3].addEventListener("click", function(){
	if (s == 3) {
		alert('YOU WON!');
	}
	if (s < 3){
		alert('NOT NOW, BOY....');
	}
	if (s > 3) {
		alert('HEY, NIGGA, YOU CHEATER');
	}
});