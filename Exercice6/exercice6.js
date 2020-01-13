var tab = [-2,1,4];

function soustrait(x){
   if(x >= 0){
        return resulta = x-2;
   }else{
       return resulta = "Nombre négatif !";
   }
   alert(resulta);
}
function affiche(){
    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length -1]));
}