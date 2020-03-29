
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/ed-tech/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/ed-tech/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/ed-tech/",
    "title": "Home",
    "body": "      En vedette:                                                                                                                                                                                                           Numériser une page avec votre téléphone              :               Il existe plusieurs outils pour numériser des pages. Voici les 3 plus faciles. :                                                                                                                                                                       Robert Antoine                                                    aujourd'hui                                                                                                                                            Articles:                                                                                                     Bienvenue au nouveau site      :       Étant donnée la situation présente, j'ai décidé de commencer un site pour montrer comment utiliser des outils qui pourraient vous être utiles. :                                                                               Robert Antoine                                      29 Mar 2020                                                              "
    }, {
    "id": 3,
    "url": "http://localhost:4000/ed-tech/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/ed-tech/numeriser-une-page/",
    "title": "Numériser une page avec votre téléphone",
    "body": "2020/03/29 - À ne pas faire: Ne tentez pas simplement de prendre une photo d’une page, il aura sûrement des ombrages et de la décoloration. Surtout que les autres méthodes sont encore plus facile! Sur le iPhone ou iPad:                                                                                                                           Ouvrez le l’appli Fichiers qui fait partie du système iOS.  Sur le premier écran, touchez les trois petits points en haut à droite. Si vous êtes déjà dans un dossier, vous devez plutôt glisser la page vers le pas pour faire apparaître les 3 petits points.  Choisissez “Numériser des documents”.  Tenez votre téléphone par dessus le document en tentant d’éviter des ombrages, elle devrait prendre la photo automatiquement. Si non, vous pouvez poussez sur le bouton pour prendre une photo et l’ajuster par la suite.  Vous finissez avec un PDF du document bien cadré avec la luminosité, la couleur et le contraste ajusté automatiquement pour vous. Sur Android (ex: Samsung Galaxy):  Ouvrez le l’appli Google Drive qui fait partie du système Android.  Touchez le bouton “+” blue en bas à droite.  Choisissez la caméra.  Tenez votre téléphone par dessus le document en tentant d’éviter des ombrages, elle devrait prendre la photo automatiquement. Si non, vous pouvez poussez sur le bouton pour prendre une photo et l’ajuster par la suite.  Vous finissez avec un PDF du document bien cadré avec la luminosité, la couleur et le contraste ajusté automatiquement pour vous. Avec Rocketbook: Rocketbook est un logiciel disponible sur iOS et Android qui facilite énormément la numérotation des feuilles. Vous avez aussi l’option d’automatiquement envoyer les fichiers à des endroits prédéterminés tel qu’un Google Drive, un courriel, etc. Le seul petit problème c’est qu’il nécessite des feuilles spécifiques. Pas de soucis par contre car ils offrent ces feuilles gratuitement! C’est vraiment l’option le plus simple et le plus puissant.  Rocketbook - Comment ça fonctionne Rocketbook For Educators – Medium Dropbox - Rocketbook Free PDF Sheets - Simplify your life "
    }, {
    "id": 5,
    "url": "http://localhost:4000/ed-tech/nouveau-site/",
    "title": "Bienvenue au nouveau site",
    "body": "2020/03/29 - Étant donnée la situation présente, j’ai décidé de commencer un site pour démontrer comment utiliser des outils qui pourraient vous être utiles. Je suis enseignant au secondaire qui aime beaucoup la technologie et aimerais vous partager des astuces qui seront particulièrement utile lors de l’enseignement à distance. SVP retourner à la page principale ou naviguer le menu pour retrouver plusieurs articles utiles. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});