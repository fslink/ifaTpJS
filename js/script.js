// I. chercher les données / accèder à la liste

var maListeEleves = listeEleves;

// II. Parcourir et manipuler des données
/*maListeEleves.forEach(function(eleve){

});*/


// III. Modification du DOM
var tableau = window.document.getElementById("tableau_eleves");
/*
newPara.innerHTML = "sqkfjhskqfjdsqjdskqjdlsqjdlksqjdlsqjd";
var monContainer = document.getElementById("container");
monContainer.appendChild(newPara);*/

// IV. Gestion de l'événement click
/*var t = document.getElementById("toClick");
t.addEventListener("click", function(){alert("clique ma gueule!")}, false);*/

for (var i = 0; i < listeEleves.length; i++) {
	var newLink = document.createElement('a');
	newLink.setAttribute('id', maListeEleves[i].nom);
	newLink.setAttribute('href', './profil?id=' + i);

	var newLine = document.createElement('li');
	newLine.innerHTML = maListeEleves[i].nom + ' ' + maListeEleves[i].prenom;

	tableau.appendChild(newLink);
	newLink.appendChild(newLine);
}