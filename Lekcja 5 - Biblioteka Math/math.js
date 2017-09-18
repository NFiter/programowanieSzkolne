                /*     Biblioteka Math     */

/*-------------------------------------------------------*/

//Wersja I - łopatologiczna 

/*
var elBlok = document.getElementById('blok');

function pi(){
    //alert('Hello');
    
    if (document.getElementById('pi').checked == true){
       var x = Math.PI;
        elBlok.innerHTML = x;
    }
    else if (document.getElementById('nic').checked == true){
      alert('Wybrałeś Nic.');  
    }
    else {
        alert('Nic nie wybrałeś.');
    }
};
*/

/*-------------------------------------------------------*/

//Wersja II - profesjonalna

/*var elBlok = document.getElementById('blok');
var elWyborPi = document.getElementById('pi');
var elWyborNic = document.getElementById('nic');

function pi(){
    //alert('Hello');
    
    if (elWyborPi.checked == true){
       var x = Math.PI;
        elBlok.innerHTML = x;
    }
    else if (elWyborNic.checked == true){
      alert('Wybrałeś nic.');  
    }
    else {
        alert('Nic nie wybrałeś.');
    }
};*/

/*-------------------------------------------------------*/

//Math.sqrt()

/*var pierwiastek = Math.sqrt(25);
console.log(pierwiastek);

var a = 13.2;
var b = 28.5;

var minimalna = Math.min(a,b);
var maksymalna = Math.max(a,b);
console.log('Minimalna ' + minimalna);
console.log('Maksymalna ' + maksymalna);

var zaokraglenie = Math.round(a);
var zaokraglenie = Math.round(b);
console.log(a);
console.log(b);*/

//Metody abs, round, floor

/*var x = -56;
var y = -13.1;
var z = 14.9;

document.write('<br>' + Math.abs(x)); //56
document.write('<br>' + Math.abs(y)); //13.1
document.write('<br>' + Math.abs(z)); //14.9

//abs to wartość bezwzględna z liczby.

document.write('<br>' + Math.round(x)); //-56
document.write('<br>' + Math.round(y)); //-13
document.write('<br>' + Math.round(z)); //15

//round zaokrągla do najbliższej.

document.write('<br>' + Math.floor(x)); //-56
document.write('<br>' + Math.floor(y)); //-14
document.write('<br>' + Math.floor(z)); //14

//floor zaokrągla w dół.*/

/*-------------------------------------------------------*/

//Potęgowanie

/*var p = Math.pow(2,10);
console.log(p); //1024*/

//Random

/*var losuj = Math.random();
console.log(losuj);*/


//Zadanie
//Losuj z przedziału (0;10>

var losPrzedzial = Math.random()*11;
console.log(Math.floor(losPrzedzial));






















