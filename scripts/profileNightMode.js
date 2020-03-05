//window.confirm('Deseja receber notificações?')
var heighVar = document.getElementById('boxfeed').style.height;
document.getElementById("lacunaesquerda").style.height = heighVar;
document.getElementById("lacunadireita").style.height = heighVar;
document.getElementById("bioContainer").style.height = heighVar;
document.getElementById("profileContainer").style.height = heighVar;
document.getElementById("boxfeed").style.height = heighVar;
String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}
function changeColorClick1(){
    document.getElementById("changeColor1").style.color = 'rgb(166, 88, 218)';
    document.getElementById("changeColor2").style.color = 'rgb(199, 199, 199)';
    document.getElementById("changeColor3").style.color = 'rgb(199, 199, 199)';
    document.getElementById("changeColor4").style.color = 'rgb(199, 199, 199)';
}

function changeColorClick2(){
    document.getElementById("changeColor2").style.color = 'rgb(166, 88, 218)';
    document.getElementById("changeColor1").style.color = 'rgb(199, 199, 199)';
    document.getElementById("changeColor3").style.color = 'rgb(199, 199, 199)';
    document.getElementById("changeColor4").style.color = 'rgb(199, 199, 199)';
}

function changeColorClick3(){
    document.getElementById("changeColor3").style.color = 'rgb(166, 88, 218)';
    document.getElementById("changeColor2").style.color = 'rgb(199, 199, 199)';
    document.getElementById("changeColor1").style.color = 'rgb(199, 199, 199)';
    document.getElementById("changeColor4").style.color = 'rgb(199, 199, 199)';
}
function changeColorClick4(){
    document.getElementById("changeColor4").style.color = 'rgb(166, 88, 218)';
    document.getElementById("changeColor2").style.color = 'rgb(199, 199, 199)';
    document.getElementById("changeColor1").style.color = 'rgb(199, 199, 199)';
    document.getElementById("changeColor3").style.color = 'rgb(199, 199, 199)';
}

