// document.querySelector('.testformulier');

// function prev(){

// }

// function next(){
    
// }


let vraagNummer = 1
showVraag(vraagNummer);

function next(n) {
    showVraag(vraagNummer += n)
}

function showVraag(n) {
    console.log(n)
    let i;
    let vragen = document.getElementsByClassName("formuliervraag");
    console.log(vragen);
    if (n > vragen.lenght) {vraagNummer = 1}

    if (n < 1) {vraagNummer = vragen.length}
    for (i = 0; i < vragen.length; i++) {
        vragen[i].style.display = "none"
    }

    vragen[vraagNummer - 1].style.display = "block";
}   


function mininaam() {
    const inputMini = document.getElementById('antwoord1').value; 
    const outputvraag1 = document.getElementById('jeroen');
    console.log(inputMini);
    outputvraag1.innerHTML = 'Wat is de geboortedatum van ' + inputMini + '?';
}



function inputtekst() {
    const inputNaam = document.getElementById('antwoord1').value; 
    const inputDate = document.getElementById('antwoord2').value; 
    const inputChild = document.getElementById('antwoord3').value; 
    const inputAllergie = document.getElementById('antwoord4').value; 
    const inputEczeem = document.getElementById('antwoord5').value; 
    const inputAllergie2 = document.getElementById('antwoord6').value;  
    const plaatshier = document.getElementById('testantwoorden')

    plaatshier.innerHTML = '<div class="confirmpage"> Naam: ' + inputNaam + '<br>Geboortedatum: ' + inputDate + '<br>Eerste kindje?: ' + inputChild + '<br>Eerdere allergie?: ' + inputAllergie + '<br>Eczeem: ' + inputEczeem + '<br>Allergie binnen de familie?: ' + inputAllergie2; '</div>'
} 
