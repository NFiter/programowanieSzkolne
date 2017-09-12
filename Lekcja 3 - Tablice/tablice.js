                                /*     Tablice     */

//Tablice służą do przechowywania wartości. Są nieograniczone, ale najlepiej pracują gdy wartości w tablicy jest maksymalnie kilkaset. Do tablicy możemy dać wartości liczbowe lub strig (w apostrofach wtedy).

/*------------------------------------------------------------------------------------*/

//Tworzenie tablicy za pomocą literału tablicy

/*var kolory = ['biały','czarny','czerwony','zielony'];
var elWynik = document.getElementById('wynik');

elWynik.innerHTML = kolory[0]; //biały */

/*------------------------------------------------------------------------------------*/

//Tworzenie tablicy za pomocą konstruktora Array

/*var samochody = new Array('BWM','Audi','Ferrari','Porsche');
console.log(samochody[samochody.length-1]);  //Porsche

console.log('Ilość elementów:' + samochody.length);  //4

var auto = prompt('Podaj auto:');
console.log(auto); //Działa prompt
samochody[0] = auto;
console.log(samochody);*/  //Działa zamiana pierwszego elementu

/*------------------------------------------------------------------------------------*/

//Zadanie 1
//Utwórz tablicę o nazwie "szkoła", przypisz do niej nazwisko, imię i wiek o które spytasz ucznia w prompcie. Wyświetl tablicę w bloku o nazwie "dane".

/*var imie = prompt('Podaj imie:');
var nazwisko = prompt('Podaj nazwisko:');
var wiek = prompt('Podaj wiek:');
var szkola = [imie,nazwisko,wiek]; 

console.log(szkola);  //Działa
    
var elDane = document.getElementById('dane');
elDane.innerHTML = szkola;*/ //Działa
    
/*------------------------------------------------------------------------------------*/

//Tworzenie tablic wielowymiarowych z konstruktora Array

/*
var tab = new Array(
    new Array('Jan','Nowak','Poznań'),
    new Array('Anna','Pawłowska','Gniezno'),
    new Array('Janusz','Kowalski','Poznań')
);
console.log(tab); //Cała tablica
console.log(tab[1][2]);  //Gniezno
*/

/*------------------------------------------------------------------------------------*/

//Sortowanie

/*var imiona = ['Paweł','Anna','Rafał','Zenon','Jacek'];
console.log(imiona);

var posortowane = imiona.sort();
console.log(posortowane);  //["Anna", "Jacek", "Paweł", "Rafał", "Zenon"]

var odwrot = posortowane.reverse();
console.log(odwrot);  //["Zenon", "Rafał", "Paweł", "Jacek", "Anna"]*/

// Usuwanie

/*
odwrot.pop(); //Usuwa ostatni element
console.log(odwrot); //["Zenon", "Rafał", "Paweł", "Jacek"]
*/

//Dodawanie

/*odwrot.push('Magda'); //Dodaje wartość "Magda" na końcu
console.log(odwrot); //["Zenon", "Rafał", "Paweł", "Jacek", "Magda"]

odwrot.unshift('Joanna'); //Dodaje wartość "Joanna" na początku
console.log(odwrot); //["Joanna", "Zenon", "Rafał", "Paweł", "Jacek", "Magda"]*/

//Sprawdzanie

/*console.log(odwrot.indexOf('Anna')); //-1 (nie istnieje)
console.log(odwrot.indexOf('Rafał')); //2 (istnieje)*/

/*------------------------------------------------------------------------------------*/

//Sortowanie liczb

/*var cyfry = [1,2,20,190,-1,1000000];
console.log(cyfry); 
cyfry.sort();
console.log(cyfry); //Pokazuje: [-1, 1, 1000000, 190, 2, 20]

cyfry.sort(function(a,b){
    return (a-b);
});*/
//Do sortowania liczb potrzebna jest funkcja

/*------------------------------------------------------------------------------------*/

//Funkcje

/*var elWynik = document.getElementById('wynik'); //Zmienna o zasięgu globalnym
var elPodajKolor = document.getElementById('podajKolor');
var elKolor = document.getElementById('kolor');
var kolor = [];

function zapisz(){
    console.log(elKolor.value); //Pobiera wartość z pola tekstowego 
    kolor[0] = elKolor.value;
    console.log(kolor);
};*/

//Zadanie Domowe
//Utwórz formularz z loginem (pole typu text) i hasłem (pole typu password) i kolorem heksadecymalnym (pole typu text). Przypisz dane do tablicy jednowymiarowej, wypisz dane w bloku na stronie w kolorze jaki podał użytkownik. Pobierz dane z tablicy. Do przypisania do tablicy użyj przycisku.

var elNektarynka = document.getElementById('wypisz');

var elPodajDane = document.getElementById('podajDane');
var elLogin = document.getElementById('login');
var elHaslo = document.getElementById('haslo');
var elKolorek = document.getElementById('kolorek');
var Dane = [];


function przypisz(){
    console.log(typeof(elKolorek.value)); //Działa
    var heksaKolor = elKolorek.value;
    console.log(typeof(heksaKolor)); //Działa
    console.log(heksaKolor); //Działa
    
    Dane[0] = elLogin.value;
    Dane[1] = elHaslo.value;
    Dane[2] = heksaKolor; 
    console.log(Dane); //Wypisuje
    
    elNektarynka.innerHTML = Dane; //Wypisuje
    elNektarynka.style.color = '#' +Dane[2]; 
    //elNektarynka.style.color = '#aadd44' ; 
    
    //Następnym razem nie koduj jak jesteś chora. >:C
    //Bo potem piszesz 3 a nie 2 >>:CCCC
};


//Martin Zagora - Brackets Git
//Potem wejdz na git-for-windows.github.io - jeśli nie działa
//Jeżeli jest ikonka różowa to Debuguj -> Uruchom ponownie z rozszerzeniami






