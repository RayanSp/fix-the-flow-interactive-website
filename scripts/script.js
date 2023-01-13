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