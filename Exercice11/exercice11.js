function modif_paragraphe() {
    var elem = document.getElementById('p');
    elem.innerHTML = '<h1><I>Corrigé</I></h1>';
}

function centrage_h1() {
    titre = document.getElementsByTagName("h");
    titre.setAttribute("align", "center");
}