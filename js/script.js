function snake(cc)
{
	switch(cc)
	{
		case 17:
        	cc -= 10;
        	break;
	    case 54:
	        cc-=20;
	        break;
	    case 62:
	        cc-=43
	        break;
	    case 64:
	        cc-=4;
	        break;
	    case 87:
	        cc-=63;
	        break;
	    case 93:
	        cc-=20;
	        break;
	    case 95:
	        cc-=20;
	        break;
	    case 99:
	    	cc-=21;
	        break;
	}
	return cc;
}
function ladder(cc)
{
	switch(cc){
		case 4:
	        cc += 10;
	        break;
	    case 9:
	        cc+=22;
	        break;
	    case 20:
	        cc+=18;
	        break;
	    case 63:
	        cc+=18;
	        break; 
	    case 28:
	        cc+=56;
	        break;
	    case 40:
	        cc+=19;
	        break;
	    case 51:
	        cc+=16;
	        break;
	    case 71:
	        cc+=20;
	        break;
	    }
	    return cc;
}

//dice roll
function dice()
{
	let dd = Math.floor((Math.random()*6)+1);
    return dd;
}
function players(c1,pn)
{
	if (c1 == 4 | c1 == 9 | c1 == 20 | c1 == 28 | c1 == 40 | c1 == 51 | c1 == 63 | c1 == 71){
        c1 = ladder(c1);
        console.log("Player "+(pn[1])+" at |=|: ",c1);}
    else if (c1 == 17 | c1 == 54 | c1 == 62 | c1 == 64 | c1 == 87 | c1 == 93 | c1 == 95 | c1 == 99){
        c1 = snake(c1);
        console.log("Player "+(pn[1])+" at~~~>: ",c1);}
    else{
        console.log("Player "+(pn[1])+" at: ",c1);
    }
    return c1;
}
//creating baits for player 1 & 2
function baits(c,p)
{
	let a,x,y;
	x = document.getElementById('ply1').value;
	y = document.getElementById('ply2').value;
	a = "gk" + String(c);
	if (Number(x) == Number(y)){
		document.getElementById(a).style.backgroundImage= "linear-gradient(to right, #F62217 , #342D7E)";
		document.getElementById(a).style.color= "white";
	}
	else if(p == "p1")
	{
		document.getElementById(a).style.backgroundImage= "linear-gradient(to right, #F62217,#F62217)";
		document.getElementById(a).style.color= "white";
	}
	else
	{
		document.getElementById(a).style.backgroundImage= "linear-gradient(to right, #342D7E,#342D7E)";
		document.getElementById(a).style.color= "white";
	}
}
//removing bgcolor from previous position
function prebaits(c1)
{
	let a;
	a = "gk" + String(c1);
	if (c1 == 4 | c1 == 9 | c1 == 20 | c1 == 28 | c1 == 40 | c1 == 51 | c1 == 63 | c1 == 71){
    	document.getElementById(a).style.backgroundImage= "linear-gradient(to right, #F3E3C3,#F3E3C3)";
    	document.getElementById(a).style.color= "black";
	}
    else if (c1 == 17 | c1 == 54 | c1 == 62 | c1 == 64 | c1 == 87 | c1 == 93 | c1 == 95 | c1 == 99){
        document.getElementById(a).style.backgroundImage= "linear-gradient(to right, grey,grey)";
        document.getElementById(a).style.color= "black";
    }
    else if (c1 == 1 |c1 == 2 |c1 == 3 |c1 == 5 |c1 == 6 |c1 == 7 |c1 == 8 |c1 == 10 |c1 == 21 |c1 == 22 |c1 == 23 |c1 == 24 |c1 == 25 |c1 == 26 |c1 == 27 |c1 == 29 |c1 == 30 |c1 == 41 |c1 == 42 |c1 == 43 |c1 == 44 |c1 == 45 |c1 == 46 |c1 == 47 |c1 == 48 |c1 == 49 |c1 == 50 |c1 == 61 |c1 == 65 |c1 == 66 |c1 == 67 |c1 == 68 |c1 == 69 |c1 == 70 |c1 == 81 |c1 == 82 |c1 == 83 |c1 == 84 |c1 == 85 |c1 == 86 |c1 == 88 |c1 == 89 |c1 == 90 ){
        document.getElementById(a).style.backgroundImage= "linear-gradient(to right, #50C878,#50C878)";
        document.getElementById(a).style.color= "black";
    }
    else{
    	document.getElementById(a).style.backgroundImage= "linear-gradient(to right, skyblue,skyblue)";
    	document.getElementById(a).style.color= "black";
    }
}
function player1()
{
		var ply1 = document.getElementById('ply1').value;
		let playerName="p1"
		c = Number(ply1);
		prebaits(c);
 		let dice1 = dice();
 		document.getElementById("dice1").innerHTML = dice1;
        console.log(dice1);
        c += dice1;
        if (c >100){
        	document.getElementById('ply1').value = ply1;
        	baits(Number(ply1),playerName);
        }

        else if (c == 100){
          console.log("Player 1 Won!!!");
          alert("Player 1 Won!!!");
          alert("Click Ok To Reload Game");
          location.reload();
          }
        else{
        	c = players(c,playerName);
            document.getElementById('ply1').value = String(c);
            baits(c,playerName);
        	document.getElementById("posi1").innerHTML = c;
        	}
}
function player2()
{
		var ply2 = document.getElementById('ply2').value;
		let playerName="p2"
		c = Number(ply2);
		prebaits(c);
 		let dice2 = dice();
 		document.getElementById("dice2").innerHTML = dice2;
        console.log(dice2);
        c += dice2;
        if (c >100){
        	document.getElementById('ply2').value = ply2;
        	baits(Number(ply2),playerName);
        }

        else if (c == 100){
          console.log("Player 2 Won!!!");
          alert("Player 2 Won!!!")
          alert("Click Ok To Reload Game");
          location.reload();
          }
        else{
        	c = players(c,playerName);
            document.getElementById('ply2').value = String(c);
            baits(c,playerName);
        	document.getElementById("posi2").innerHTML = c;
        	}
}