function boucle(){
    var tab = new Array(3);
    for(var i = 0; i < tab.length; i++){
        tab[i] = i*i;
    }
    alert(tab);
}
function boucle2(){
    
    var longeur = prompt(" saisir la longueur souhaitée du tableau")
    var tab = new Array();

    for(var i = 0; i < longeur; i++){
        tab[i] = i*i;
    }
    alert(tab);
}