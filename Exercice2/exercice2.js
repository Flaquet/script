function functionperiair(){

    var longueur = prompt("Longueur");
    var calculperi = 2* Math.PI * (longueur /2);
    var calculair = Math.PI * Math.pow((longueur /2), 2);
    alert("perimetre du cercle " + calculperi.toFixed(2) + " cm");
    alert("air du cercle " + calculair.toFixed(2) + " cm");

}