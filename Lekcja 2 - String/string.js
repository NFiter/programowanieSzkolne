                /*    String     */

var text = 'ZSK - Zespół Szkół Komunikacji';
//console.log(text.length); //30 

//text.length wyświetla długość stringa.

var pierwszyZnak = text.charAt(0);
//console.log(pierwszyZnak); //Z

//text.charAt(indeks) przypisuje literę o danym indeksie.

var ostatniZnak = text.charAt(text.length-1);
//console.log(ostatniZnak); //i
 
var kod = text.charCodeAt(0); //Z
//console.log(kod); //90

var kod = text.charCodeAt(14); //z
//console.log(kod); //122

//text.charCodeAt(indeks) pokazuje kod ASCII litery.


//Zamiana na duże litery
var duza = text.toUpperCase();
//console.log(duza);

//Zamiana na małe litery
var male = text.toLowerCase();
//console.log(male);


//Zadanie 1
//Poproś użytkownika o imię, ustawiając 'Jan' jako domyślną odpowiedź. Popraw błędnie wprowadzone imię, zamieniając pierwszą literę na dużą literę a resztę na małe. Wyświetl w konsoli.

//var poprawnyText = prompt('Podaj imię:', 'Agata');
//poprawnyText = poprawnyText.charAt(0).toUpperCase() + poprawnyText.slice(1).toLowerCase();
//console.log(poprawnyText); //Działa!

//Zadanie 2
//Poproś użytkownika o imię a następnie usuń pierwszą i ostatnią literę. Wyświetl wynik w konsoli.
var mojeImie = prompt('Podaj swoje imię:');
mojeImie = mojeImie.substr(1,mojeImie.length-2);
console.log(mojeImie); //atali
