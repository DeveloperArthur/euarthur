//Quando a página é carregada, irá executar os métodos abaixo
window.onload = getAnoAtual;
window.onload = getMeusAnosNaTI;

function getAnoAtual(){
	var anoAtual = new Date().getFullYear();
	document.getElementById('anoAtual').innerHTML = anoAtual;
	return anoAtual;
}

function getMeusAnosNaTI(){
	var anoQueComecei = 2017;
	meusAnosNaTI = getAnoAtual() - anoQueComecei;
	document.getElementById('meusAnosNaTI').innerHTML = meusAnosNaTI + " anos";
}