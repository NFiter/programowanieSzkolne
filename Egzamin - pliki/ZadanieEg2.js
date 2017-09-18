var elPodstawa = document.getElementById('podstawa');
var elWykladnik = document.getElementById('wykladnik');
var elPotegowanie = document.getElementById('potegowanie');
var elBlok = document.getElementById('blok');

elPotegowanie.onclick = function (){
    var x = elPodstawa.value;
    var y = elWykladnik.value;
    
        if (x == '' || y == ''){
            elBlok.innerHTML = 'Wpisz podstawę i wykładnik potęgi.';
        }
        else if (y<0){
            elBlok.innerHTML = 'Wykładnik potęgi musi być dodatni.';
        }
    
    x = parseInt(x);
    y = parseInt(y);
    
    elBlok.innerHTML = 'Wynik działania wynosi: ' + Math.pow(x,y);
    
}
