//window.confirm('Deseja receber notificações?')

var heighVar = document.getElementById('boxfeed').style.height;
document.getElementById("lacunaesquerda").style.height = heighVar;
document.getElementById("lacunadireita").style.height = heighVar;
document.getElementById("bioContainer").style.height = heighVar;
document.getElementById("profileContainer").style.height = heighVar;
//document.getElementById("boxfeed").style.height = heighVar;

String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}

function changeColorClick1(){
	document.getElementById("changeColor1").style.color = 'rgb(0, 140, 221)';
	document.getElementById("changeColor2").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor2").style.backgroundColor = '';
	document.getElementById("changeColor3").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor3").style.backgroundColor = '';
	document.getElementById("changeColor4").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor4").style.backgroundColor = '';
}

function changeColorClick2(){
	document.getElementById("changeColor2").style.color = 'rgb(0, 140, 221)';
	document.getElementById("changeColor1").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor1").style.backgroundColor = '';
	document.getElementById("changeColor3").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor3").style.backgroundColor = '';
	document.getElementById("changeColor4").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor4").style.backgroundColor = '';
}

function changeColorClick3(){
	document.getElementById("changeColor3").style.color = 'rgb(0, 140, 221)';
	document.getElementById("changeColor2").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor2").style.backgroundColor = '';
	document.getElementById("changeColor1").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor1").style.backgroundColor = '';
	document.getElementById("changeColor4").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor4").style.backgroundColor = '';
}
function changeColorClick4(){
	document.getElementById("changeColor4").style.color = 'rgb(0, 140, 221)';
	document.getElementById("changeColor2").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor2").style.backgroundColor = '';
	document.getElementById("changeColor1").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor1").style.backgroundColor = '';
	document.getElementById("changeColor3").style.color = 'rgb(140, 150, 153)';
	document.getElementById("changeColor3").style.backgroundColor = '';
}

function changeStarColor(){
	if(document.getElementsById("star").classList.contains("checked") == false){
		document.getElementsById("star").style.color = 'rgb(185, 193, 212)'
	}
	else{
		document.getElementsByClassName("fa-star").style.color = 'orange'
	}
}

$('button').click(function() {
	$(this).text(function(_, text) {
	  return text === "Follow" ? "Unfollow" : "Follow";
	});
	if($(this).text() == "Follow") {
	  $(this).removeClass('unfollow');
	} else if($(this).text() == "Unfollow") {
	  $(this).addClass('unfollow');
	}
});