function zmienodp(liczba){
    switch(liczba){
        case 1:
            var plik = "<img src=\"kula/kulalos" + liczba + ".jpg\" />";
            document.getElementById("magiczna-kula").innerHTML = plik;
        case 2:
            var plik = "<img src=\"kula/kulalos" + liczba + ".jpg\" />";
            document.getElementById("magiczna-kula").innerHTML = plik;
        case 3:
            var plik = "<img src=\"kula/kulalos" + liczba + ".jpg\" />";
            document.getElementById("magiczna-kula").innerHTML = plik;
        case 4:
            var plik = "<img src=\"kula/kulalos" + liczba + ".jpg\" />";
            document.getElementById("magiczna-kula").innerHTML = plik;
        case 5:
            var plik = "<img src=\"kula/kulalos" + liczba + ".jpg\" />";
            document.getElementById("magiczna-kula").innerHTML = plik;
        case 6:
            var plik = "<img src=\"kula/kulalos" + liczba + ".jpg\" />";
            document.getElementById("magiczna-kula").innerHTML = plik;
    }
}
function shake(){
    const elem = document.getElementById("magiczna-kula");

    // elem.style.right
    // elem.style.left

}
function losuj(){
    prompt("Zadaj pytanie:");
    let liczba = Math.floor(Math.random() * 6) + 1;
    zmienodp(liczba);
    // Get a reference to the button element
    const button = document.getElementById("myButton");

    // Disable the button
    button.disabled = true;
}
function reset(){
    var plik = "<img src=\"kula/kula8.jpg\" />";
    document.getElementById("magiczna-kula").innerHTML = plik;
    const button = document.getElementById("myButton");
    button.disabled = false;
}


