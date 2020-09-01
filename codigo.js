//window.onclick = Sonido;
let shift= true;
let eye1 			= document.getElementById("eye-1");

document.getElementById('eye-1').style.display='block';
document.getElementById('eye-1-1').style.display='none';

document.getElementById('eye-2').style.display='block';
document.getElementById('eye-2-1').style.display='none';

function Switch(){
	if (shift){
    shift= false;
	  document.getElementById('eye-1').style.display='none';
    document.getElementById('eye-1-1').style.display='block';

    document.getElementById('eye-2').style.display='none';
    document.getElementById('eye-2-1').style.display='block';
    
	} else {
    shift= true;
    document.getElementById('eye-1').style.display='block';
    document.getElementById('eye-1-1').style.display='none';

    document.getElementById('eye-2').style.display='block';
    document.getElementById('eye-2-1').style.display='none';
	}
}
//setTimeout(Switch,1500);
setInterval(Switch, 1000);



