/////////////////////////////////////////
// Configuration
/////////////////////////////////////////

// Catégories où le 1er post sera affiché uniquement
// Il peut y en avoir 1 seule, comme une infinité !
// Voir plus de détail dans les exemples suivants

var CategoriesForum_Qui_Auront_Le_1er_Post_Affiche = [
	"c1"
];

/*****************************************************************/
/* Exemple :

   Affiche le 1er post uniquement sur une catégorie de forum
   ---------------------------------------------------------
   var CategoriesForum_Qui_Auront_Le_1er_Post_Affiche = [
   	 "c1"
   ];

   Afficher le 1er post uniquement sur 2 catégories
   ------------------------------------------------
   var CategoriesForum_Qui_Auront_Le_1er_Post_Affiche = [
   	 "c1",
	 "c2"
   ];

   Afficher le 1er post uniquement sur 3 catégories
   ------------------------------------------------
   var CategoriesForum_Qui_Auront_Le_1er_Post_Affiche = [
   	 "c1",
	 "c2",
	 "c3"
   ];
*/

/////////////////////////////////////////////
// Script - NE RIEN CHANGER SAUF SI MAITRISE
/////////////////////////////////////////////

var REGEXP_CAT_FROM_URL = "[a-zA-Z]+://[^/]+/(c[0-9]+)-([^/]+)";
var REGEXP_PAGE_FROM_INFO = "Page ([0-9]+) sur ([0-9]+)"

// Indique si on est à la 1ère page du post
function isFirstPage() {
	var reg = new RegExp(REGEXP_PAGE_FROM_INFO, "gi");
	var infoPage = $(".forumline.noprint").first().find(".gensmall").first().text(); // On prends les informations de bas de page, qui indique "Page X sur X"
	var pageNumber = parseInt(reg.exec(infoPage)[1])

	return (pageNumber == 1);
}

// Obtient l'id cat provenant des liens en haut de chaque page
function getIdCat() {
	var reg = new RegExp(REGEXP_CAT_FROM_URL, "gi");
	var urlCat = $("a.nav")[1].href; // 1er lien : page d'accueil, 2ème lien: catégorie
	var values = reg.exec(urlCat);

	var currentIdCat = values[1];
	return currentIdCat;
}

// Récupère le 1er post avec ses infos de contact
// La classe js-post est à rajouter sur l'ensemble du post et des infos
function getFirstPost() {
	return $(".js-post").first()
}

if (!isFirstPage()) {
	var currentIdCat = getIdCat();
	var foundedCat = false;
	for (var i = 0; i < CategoriesForum_Qui_Auront_Le_1er_Post_Affiche.length; i++) {
		var idCat = CategoriesForum_Qui_Auront_Le_1er_Post_Affiche[i];
		if (idCat == currentIdCat) {
			foundedCat = true;
			break;
		}
	}
	if (!foundedCat) {
		getFirstPost().hide();
	}
}
