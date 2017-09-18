                        /*     Funkcje      */


/*function witaj(imie){
  document.write('Witaj, ' + imie);   
};

var name = 'Adrian';

witaj(name);*/

/*---------------------------------------------------------------------*/

/*function poleProstokata(a,b){
  var pole = a * b;
    return pole;
};*/

//var szerokosc = prompt('Podaj szerokość:');
//var dlugosc = prompt('Podaj długość:');

//document.write(poleProstokata(szerokosc,dlugosc));


/*function poleObjetosc(szerokosc,dlugosc,wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = szerokosc * dlugosc * wysokosc;
    var wynik = [pole, objetosc];
    
    return wynik;
};*/

//var wysokosc = prompt('Podaj wysokosc:');

//console.log(poleObjetosc(szerokosc, dlugosc, wysokosc));

/*var pole = poleObjetosc(2,3,4)[0];
var objetosc = poleObjetosc(2,3,10)[1];
console.log(pole);
console.log(objetosc);*/

/*
var x = prompt('Podaj wartosć:', '0 - pole, 1 - objetosc');
var dane = poleObjetosc(2,3,10)[x];
console.log(dane);
*/

/*---------------------------------------------------------------------*/

//Zadanie Domowe
//Napisz skrypt, który oblicza obwód, pole koła oraz objętość stożka. Dane użytkownik podaje z klawiatury. Wykorzystaj obiekt math. Użytkownik wybiera za pomocą pola radio co chce obliczyć. Dane wprowadza w formularz. Dane wyświetl w bloku. 

//console.log(Math.PI); //Obiekt Math

var elWynik = document.getElementById('wynik');
var elR = document.getElementById('r');
var elH = document.getElementById('h');
var Dane = [];


function przelicz(){
//console.log(elR.value);
//console.log(elH.value);
    var obwod = 2 * Math.PI * elR.value;
    var pole = Math.PI * Math.pow(elR.value,2);
    var objetosc = (1/3)*(Math.PI* Math.pow(elR.value,2) * elH.value);
    
    console.log(obwod);
    console.log(pole);
    console.log(objetosc); //Oblicza
    
    Dane[0] = obwod;
    Dane[1] = pole;
    Dane[2] = objetosc;
    
    console.log(Dane); //Działa
    
    
if (document.getElementById('wybor1').checked == true) {
        elWynik.innerHTML = Dane[0];
    }
else if (document.getElementById('wybor2').checked == true) {
        elWynik.innerHTML = Dane[1];
    }
else if (document.getElementById('wybor3').checked == true) {
        elWynik.innerHTML = Dane[2];
    }
};


