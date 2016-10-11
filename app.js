
$(document).ready(function(){
	
	var ajout = 0;
	var tableau = ['click encore', 'allez encore une fois', 'tu peux mieux faire', 'courage'];
	var len = tableau.length;

	$("img").click(function(){
		ajout++;
		$(".counter").text(ajout);

		if (ajout % 20 === 0){

			alert(tableau[Math.floor(Math.random() * len)]);
		}
	});
});