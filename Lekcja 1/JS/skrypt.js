                        /*     Brackets     */

//Brackets - Skróty klawiszowe
/*
Ctrl +/-      - przybliża lub oddala widok.
Ctrl Tab      - przełącza między otwartymi plikami.
Ctrl Shift /  - po zaznaczeniu obszaru kodu i wciśnięciu tej kombinacji, zaznaczony obszar zostaje umieszczony w komentarzu. Działa też w drugą     stronę. 
Ctrl d        - duplikuje zaznaczoną linię
Ctrl LPM      - pozwala na pisanie/edycję/usuwanie w kilku miejscach na raz (proponuję sprawdzić samemu, nie potrafię opisać). 
Ctrl s        - szybki zapis

Można włączyć "Pogląd na żywo" (piorunek po prawej stronie u góry), co pozwala nam pisać i obserwować zmiany w przeglądarce. Jednak ma parę błędów i lepiej robić to normalnym sposobem.

Klocek pod piorunem to Menadżer rozszerzeń. Tam w zakładce "Motywy" możemy pobrać motyw dla Bracketsa. Zalecane są ciemne motywy! (np. Brackets Dark)
Motyw zmieniamy w menu Widok. 
*/

//Konsola w przeglądarce
/*
Najlepsza przeglądarka to Chrome. F12 otwiera konsolę (albo PPM i "Zbadaj..."). Tam możemy sprawdzić błędy lub komunikaty pochodzące od JavaScript.
*/

//Objaśnienia
/*
Komentarze są bardzo przydatne dla programistów! Nie tylko można wziąść cały kod w komentarz i w ten sposób sprawdzić czy wszystko działa, ale można też tego użyć do komentowania, co jest efektem niektórych działań kodu (najlepszy jest //).

Będę ich używać jak najwięcej.
*/


                         /*     Powtórka     */

/*
document.write("Skrypt działa poprawnie w<br />");
document.write("Skrypt działa poprawnie w<br />");
document.write("Skrypt działa poprawnie w<br />");
console.log("tekst");
*/

//var - słowo kluczowe
//imie - nazwa zmiennej

/*var imie="Ada";
document.write(imie);  //Ada*/
/*console.log(imie);
document.write("test");*/

/*document.write("Witaj, " + imie + "!"); *///Witaj, Ada!

//konkatenacja - to jest plus (+)

//var suma=10 + 20 + 30;
//var suma=10 + 'suma' + 30;
/*var suma= 10 - '20' + 30;
console.log(suma);*/

//= - operator przypisania
//Ada - wartość zmiennej

/*var imie2="Natalia";
document.write(imie2);*/

//Alert
//window.alert('test'); <-- Nie trzeba pisać window.
//alert('test');

var a = 9, b = 'Janusz', c = true, d;
var suma = a+b;
var roznica = a-b;
var mnozenie = a*b;
var dzielenie = a/b;
var modulo = a%b; //Modulo zwraca resztę z dzielenia.

/*console.log(typeof(a)); //Sprawdzanie typu zmiennej.
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));*/

/*var dzialanie = 7%2/3;
console.log(dzialanie);*/

var dziesietna = 10;
var oktalna = 010;
var heksadecymalne = 0x20;
/*console.log(dziesietna); //10
console.log(oktalna); //8
console.log(heksadecymalne); //32*/

/*console.trace(); *///Wyświetla z jakiego pliku korzystamy.

//camelCase
/*var duzaLitera;
var _duzaLitera;
var $duzaLitera;
var 8duzaLitera; //Zmienna nie może się zaczynać od cyfry!*/
/*
var zmienna = 2.5;
console.log(zmienna);*/

/*var j1 = '1';
var j2 = '1.5';
var wiek = 'Aga';
console.log(typeof(j1));

j1 = parseInt(j1); //zamienia j1 na wartość typu Integer (liczba) i przypisujemy ją do j1
j2 = parseFloat(j2);  //zamienia j2 na wartość typu float (liczba zmiennaprzecinkowa)
wiek = parseInt(wiek);*/

/*var wynik = j1 + 2;*/ //3
/*var wynik = j1 + j2; //2
console.log(wynik);
console.log(wiek);*/ //NaN (Not a Number)

//Ćwiczenie
var x = 'ZSK';
//document.getElementById('naglowek').innerHTML = x;
// ^-- Tak można robić... 
// v-- Ale tak jest lepiej!
/*var elNaglowek = document.getElementById('naglowek');
elNaglowek.innerHTML =x;
elNaglowek.style.color = 'red';*/

//Prompt
/*var imie = prompt('Podaj swoje imię');
console.log(imie);
console.log(typeof(imie));*/

//Zadanie 1
/*var a = prompt('Podaj a:');
var b = prompt('Podaj b:');
var wynik = a*b;
console.log(wynik);*/

//Zadanie 2
/*var a = prompt('Podaj pierwszy wiek:');
var b = prompt('Podaj drugi wiek:');
a = parseInt(a);
b = parseInt(b);
var wynik = (a+b)/2;
console.log(wynik);

var elSredni = document.getElementById('sredni');
elSredni.innerHTML = 'Średni wiek to: ' + wynik;*/
//Zamiast innerHTML można użyć textContent.


