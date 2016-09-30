/* Quatre quarts Clicker 

Réalisez un petit jeu nommé cookie clicker, le but étant de 
détecter les click sur le cookie et d'incrémenter le contenu de 
la div #count avec le compte total !

Bonus

Tous les 20 click, demandez à l'utilisateur de trouver une activité 
plus productive via un alert
Un message différent tous les 20 clicks
Un message aléatoire parmi une liste de messages */

/* MON OPTION PREMIERE : mais pbm lors car message d'alert à 0 au lieu d'avoir le premier message d'alerte à 20 */

/*$(document).ready(function(){
	


	$("img").click(function(){

	var ajout = parseInt($(".counter").text());
	$(".counter").text(ajout+1);
	console.log(ajout);

	if (ajout % 20 === 0){
		alert('Trouve une activité plus productive !')
	}


	});

});*/



/*OPTION 2 : sans bug à 0 pr le message d'alerte*/




$(document).ready(function(){
	
	var ajout = 0;
	var tableau = ['click encore', 'allez encore une fois', 'tu peux mieux faire', 'courage'];
	var len = tableau.length;


	$("img").click(function(){
		ajout++;
		$(".counter").text(ajout);
		console.log(ajout);

// Tous les 20 click, demandez à l'utilisateur de trouver une activité 
// plus productive via un alert

	if (ajout % 20 === 0){
	// alert('Trouve une activité plus productive !')
	// }

// 2 derniers bonus 

	alert(tableau[Math.floor(Math.random() * len)]);
}
});
});