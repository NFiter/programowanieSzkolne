var elLiczba1 = document.getElementById('liczba1');
var elLiczba2 = document.getElementById('liczba2');

var elDodawanie = document.getElementById('dodawanie');
var elOdejmowanie = document.getElementById('odejmowanie');
var elMnozenie = document.getElementById('mnozenie');
var elDzielenie = document.getElementById('dzielenie');

var elBlok = document.getElementById('blok');

//console.log(elLiczba1.value);
//console.log(elLiczba2.value);
//console.log(elDodawanie.value);
//console.log(elOdejmowanie.value);
//console.log(elMnozenie.value);
//console.log(elDzielenie.value);



elDodawanie.onclick = function (){
    var x = elLiczba1.value;
    var y = elLiczba2.value;
    
        if (x == '' || y == ''){
            elBlok.innerHTML = 'Proszę uzupełnić obie liczby.';
        } 
    x = parseInt(x);
    y = parseInt(y);
    
    elBlok.innerHTML = x + ' + ' + y + ' = ' + (x+y);
    
}

elOdejmowanie.onclick = function (){
    var x = elLiczba1.value;
    var y = elLiczba2.value;
    
        if (x == '' || y == ''){
            elBlok.innerHTML = 'Proszę uzupełnić obie liczby.';
        } 
    x = parseInt(x);
    y = parseInt(y);
    
    elBlok.innerHTML = x + ' - ' + y + ' = ' + (x-y);
    
}

elMnozenie.onclick = function (){
    var x = elLiczba1.value;
    var y = elLiczba2.value;
    
        if (x == '' || y == ''){
            elBlok.innerHTML = 'Proszę uzupełnić obie liczby.';
        } 
    x = parseInt(x);
    y = parseInt(y);
    
    elBlok.innerHTML = x + ' * ' + y + ' = ' + (x*y);
    
}

elDzielenie.onclick = function (){
    var x = elLiczba1.value;
    var y = elLiczba2.value;
    
        if (x == '' || y == ''){
            elBlok.innerHTML = 'Proszę uzupełnić obie liczby.';
        } 
        else if (y == 0){
            elBlok.innerHTML = 'Nie wolno dzielić przez zero.';
        }
    x = parseInt(x);
    y = parseInt(y);
    
    elBlok.innerHTML = x + ' : ' + y + ' = ' + (x/y);
    
}