function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

var $_GET = $_GET();
var eleve = listeEleves[$_GET['id']];

var tableau = document.getElementById('tableau_profil');

var newLineNom = document.createElement('li');
newLineNom.innerHTML = eleve.nom;

var newLinePrenom = document.createElement('li');
newLinePrenom.innerHTML = eleve.prenom;

var newLineAge = document.createElement('li');
newLineAge.innerHTML = eleve.age;

var newLineVille = document.createElement('li');
newLineVille.innerHTML = eleve.ville;

var newLineJavascript = document.createElement('li');
newLineJavascript.innerHTML = eleve.javascript;

var newLineFav_web = document.createElement('li');
newLineFav_web.innerHTML = eleve.fav_web;

var newLineFav_web_why = document.createElement('li');
newLineFav_web_why.innerHTML = eleve.fav_web_why;

var newLineFav_app = document.createElement('li');
newLineFav_app.innerHTML = eleve.fav_app;

var newLineFav_app_why = document.createElement('li');
newLineFav_app_why.innerHTML = eleve.fav_app_why;

var newLineBefore_ifa = document.createElement('li');
newLineBefore_ifa.innerHTML = eleve.before_ifa;

var newLineWhy_ifa = document.createElement('li');
newLineWhy_ifa.innerHTML = eleve.why_ifa;

var newLineContact_mail = document.createElement('li');
newLineContact_mail.innerHTML = eleve.contact_mail;

tableau.appendChild(newLineNom);
tableau.appendChild(newLinePrenom);
tableau.appendChild(newLineAge);
tableau.appendChild(newLineVille);
tableau.appendChild(newLineJavascript);
tableau.appendChild(newLineFav_web);
tableau.appendChild(newLineFav_web_why);
tableau.appendChild(newLineFav_app);
tableau.appendChild(newLineFav_app_why);
tableau.appendChild(newLineBefore_ifa);
tableau.appendChild(newLineContact_mail);
