/** Context var should be received from a backend this is just an example */
function getContextLanguage(userLang) {
	if (userLang === 'es-ES') {
		return {
			"title": "Test Handlebars",
			"body": "Soy una traduccion!",
			"offer": {
				"important": {
					"id": "123",
					"name": "milton en espanol"
				},
				"less-important": {
					"id": "321",
					"name": "no-milton en espanol"
				}
			}
		};
	}

	return {
		"title": "Handlebars Test",
		"body": "I'm a translation!",
		"offer": {
			"important": {
				"id": "123",
				"name": "milton"
			},
			"less-important": {
				"id": "321",
				"name": "no-milton"
			}
		}
	};
}
/****************************** This above are just dada providers ***/


 /** Change this var to toggle languages */
var userLang = navigator.language || navigator.userLanguage;
var context = getContextLanguage(userLang);

var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);


var html = template(context);

document.getElementById('entry-template').innerHTML = html;

console.log(html);
