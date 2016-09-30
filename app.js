/* Quatre quarts Clicker 

Réalisez un petit jeu nommé cookie clicker, le but étant de 
détecter les click sur le cookie et d'incrémenter le contenu de 
la div #count avec le compte total !

Bonus

Tous les 20 click, demandez à l'utilisateur de trouver une activité plus productive via un alert
Un message différent tous les 20 clicks
Un message aléatoire parmi une liste de messages */

$(document).ready(function(){
	
	$("img").click(function(){

	ajout = parseInt($(".counter").text());
	$(".counter").text(ajout+1);

	});


	// var cookieClicker = 0;

	// $("button").click(function(){
	// 	cookieClicker ++;

	// });
});