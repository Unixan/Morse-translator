// Model

const morseAlphabet = ['·−', '−···', '−·−·', '−··', '·', '··-·', '--·', '····', '··', '·---', '-·-', '·-··', '--', '-·', '---', '·--·', '--·-', '·-·', '···', '-', '··-', '···-', '·--', '-··-', '-·--', '--··', ' ', '·-·-', '---·', '·--·-'];
const alphabet = 'abcdefghijklmnopqrstuvwxyz æøå';
let inputLetters = '';
let lettersToMorse = '';
let normalCase = '';

// View

function view() {
    html = '';
    html = /*HTML*/`
    <h1>Morsekodeoversetter!</h1>
    <div>Skriv inn tekst du vil oversette til morsekode:</div><br>
    <input class="input" placeholder="Din tekst her og trykk enter ..." onchange="translateInput(this.value)"></input><br><br>
        `
    html += `<div class="translate">` + normalCase + `</div><br>
            <div>Blir</div><br>
            <div class="translate">` + lettersToMorse + `</div>`
    let appDiv = document.getElementById('app')
    appDiv.innerHTML = html;
}

// Controller

function translateInput(text) {
    normalCase = text
    inputLetters = text.toLowerCase();
    for (index of inputLetters) {
        let indexLetter = alphabet.indexOf(index)
        lettersToMorse += morseAlphabet[indexLetter] + ' '
    }
    console.log(lettersToMorse)
    view();

    lettersToMorse = '';


}