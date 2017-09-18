                    /*     Pętle     */

/*-------------------------------------------------------*/

//Pętla for

/*for(var i=0; i<10 ; i++){
    document.write(i);
    if (i==6) break;
    
}*/ //Pierwszy element w pętli nie jest konieczny.


//Zadanie
//Losuj 10 liczb z przedziału od <10;100>.

/*for (var i=1 ; i<=10 ; i++){
    
    var los = Math.floor(Math.random()*91 + 10);
    document.write(los + '<br>');

};*/

/*for (var i=1 ; i<11 ; i++){
    if(i==1) {
        document.write(i + ' raz<br>');
    }
    else {
        document.write(i + ' razy<br>');
    }
}*/

//Zadanie
//Użytkownik podaje z klawiatury wartość początkową i końcową pętli. Po każdej liczbie, dodaj przecinek a tylko po ostatniej liczbie dodaj kropkę. Pierwsza liczba musi być mniejsza od drugiej.

/*var a = prompt('Podaj liczbę początkową.');
var b = prompt('Podaj liczbę końcową.');

a = parseInt(a);
b = parseInt(b);

if(a>b){
        alert('Wartości błędne.');
}
else for(; a<=b ; a++){
    
        if(a==b){
            document.write(a + '.');
        }
        else {
            document.write(a + ', ');
        }
    };*/

/*-------------------------------------------------------*/

//Pętla While
//Pętla while może się nie wykonać ani razu.


/*var i = 0;

while (i++ <5){
    document.write(i + '<br>');
}*/
//Powyższy przykład działa.

/*var x = 4;

while (x == 4){
    alert('x równe 4');
}*/


//Zadanie

/*var x = 0, y = 0;

while (x >= y){
    x = Number(prompt('Podaj x')); 
    y = Number(prompt('Podaj y'));
}

document.write('Podałeś poprawce wartości:<br>' + 'x = ' + x + '<br>' + 'y = ' + y);*/

//Należy zwracać uwagę jakiego typu są zmienne. x i y były typu string, co sprawiało, że 45 było mniejsze od 8. Zastosowanie Number() zapobiegło nieprawidłowemu wykonaniu pętli.

/*-------------------------------------------------------*/

//Do While
//Zawsze wykona się przynajmniej jeden raz.

/*do {
    var imie = prompt('Podaj swój wiek.');
    
} while(imie != 18)

document.write('Masz 18 lat.');*/
/*-------------------------------------------------------*/

//Foreach

var Tab = ['Anna', 'Jace', 'Krzysztof', 'Paweł'];

for (var i=0 ; i<=Tab.lenght-1 ; i++){
    document.write(Tab[i] + ', ');
}
document.write('<br>');

function pokaz(wartosc, indeks){
    document.write(indeks + i + ' - element tablicy wynosi: ' );
    document.write('<strong>' + wartosc + '</strong>');
    document.write('<br>');
}
Tab.forEach(pokaz);




/*-------------------------------------------------------*/

//Zadanie
//Wykorzystaj pętlę for i do while!
//Podaj 5 liczb podzielnych przez 2 z klawiatury. Zapisz je do tablicy i wyświetl w konsoli.

/*var Tab = [];
var a;

for (var i=0 ; i<=4 ; i++){
    
    do {
        a = prompt('Podaj liczbę podzielną przez 2.');
        a = parseInt(a);
    } while(a%2 != 0)
    
    Tab[i] = a;
        
};
console.log(Tab);*/

/*-------------------------------------------------------*/

//Zadanie
//Użytkownik podaje z klawiatury liczbę. Zabezpiecz przed podaniem litery, znaku specjalnego. Ma być pytany tak długo aż poda liczbę.

/*document.write('<input type="text" id="liczba">'); //Działa. :o
document.write('<button id="przycisk">Wyślij</button>'); //Działa. :o
var elPrzycisk = document.getElementById('przycisk');
//var elLiczba = document.getElementById('liczba');
//var wartosc = elLiczba.value;

elPrzycisk.onclick = function (){
    var elLiczba = document.getElementById('liczba');
    var wartosc = elLiczba.value;
    
     if (!isNaN(wartosc)){
        alert('Podałeś liczbę!');
     }
};*/

/*-------------------------------------------------------*/

//Zadanie
//Program wyświetlający liczby od 1 do 10 w pięciu rzędzach. Po każdej liczbie ma być przecinek a po ostatniej w każdym rzędzie ma być kropka.

/*
for (var i=1 ; i<=5 ; i++){
    
    for(var j=1 ; j<=10 ; j++){
        
        if (j == 10) document.write(j + '. ');
        else document.write(j + ', ');
    }
    document.write("<br>");
    
}
*/


/*-------------------------------------------------------*/

//Zadanie
//Zrób choinkę.

/*
*
**
***
****
*****
*/

/*for (var i=1 ; i<=5 ; i++){
    for (var j=1 ; j<=i ; j++){
        document.write('*');
    }
    document.write("<br>");
}*/

/*-------------------------------------------------------*/

//Zadanie
//Zrób choinkę z liczb.

/*
1
22
333
4444
55555
*/


/*for (var i=1 ; i<=5 ; i++){
    for (var j=1 ; j<=i ; j++){
        document.write(i);
    }
    document.write("<br>");
}*/

/*-------------------------------------------------------*/

//Zadanie
//Podaj z klawiatury maksymalną ilość gwiazdek, zrób pętle w której zabezpieczysz przed podaniem błędnych danych.

/*
do {

var x = prompt('Podaj maksymalna liczbe: ');
x = parseInt(x);
    
} while (isNaN(x) || x <= 0)
    
for (var i=1 ; i<=x ; i++){
    for (var j=1 ; j<=i ; j++){
        document.write('*');
    }
    document.write("<br>");
}
*/

/*-------------------------------------------------------*/

//Zadanie
//Użytkownika podaje login i hasło w formularzu. Jeśli login to "admin" a hasło to "tajne@123" to na ekranie wyświetli się  komunikat w kolorze czerwonym: "poprawne hasło"

/*var elLogin = document.getElementById('login');
var elPass = document.getElementById('pass');
var elPrzycisk = document.getElementById('przycisk');
var elBlok = document.getElementById('blok');

elPrzycisk.onclick = function (){
    var login = elLogin.value;
    var pass = elPass.value;
    
    if (login == 'admin' && pass == 'tajne@123'){
        elBlok.style.color = 'red';
        elBlok.innerHTML = 'Podałeś poprawne hasło.';
    }
}*/

/*-------------------------------------------------------*/

//Zadanie Domowe [Na poniedziałek]
//Użytkownik w formularzu podaje nazwę swoich ulubionego zespołów. Jeśli poda "Metallica" oraz "AD/CD" wyświetli mu się strona zespołu Metallica i AC/DC. Użytkownik jeśli będzie podawał zespoły więcej niż trzy razy to ma wyświetlić mu się komunikat w bloku strony o treści: "Nie słuchasz tego co ja."
//Uzyj zmiennej globalnej. || Jedna wersja to wybór z listy a druga to z wpisaniem.

//window.location.assing(link tutaj);

/*-------------------------------------------------------*/

//Zadanie






