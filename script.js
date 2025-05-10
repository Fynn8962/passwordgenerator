let ausgabe = "";
function generieren() {
  document.getElementById("output").innerHTML = "output";
  ausgabe = "";
  const zeichenArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",

    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",

    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",

    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    ",",
    ".",
    "?",
    "/",
    "|",
    "~",
  ];

  const grossbuchstaben = zeichenArray.filter(
    (char) => char >= "A" && char <= "Z"
  );
  const kleinbuchstaben = zeichenArray.filter(
    (char) => char >= "a" && char <= "z"
  );
  const zahlen = zeichenArray.filter((char) => char >= "0" && char <= "9");
  const sonderzeichen = zeichenArray.filter(
    (char) =>
      !grossbuchstaben.includes(char) &&
      !kleinbuchstaben.includes(char) &&
      !zahlen.includes(char)
  );

  let grossbuchstabenChecked =
    document.getElementById("grossbuchstaben").checked;
  let kleinbuchstabenChecked =
    document.getElementById("kleinbuchstaben").checked;
  let zahlenChecked = document.getElementById("zahlen").checked;
  let sonderzeichenChecked = document.getElementById("sonderzeichen").checked;
  let anzahlZeichnen = document.getElementById("anzahlZeichen").value;

  if (anzahlZeichnen > 64) {
    anzahlZeichnen = 64;
  }

  let erlaupteZeichen = [];

  if (grossbuchstabenChecked) {
    erlaupteZeichen = erlaupteZeichen.concat(grossbuchstaben);
  }
  if (kleinbuchstabenChecked) {
    erlaupteZeichen = erlaupteZeichen.concat(kleinbuchstaben);
  }
  if (zahlenChecked) {
    erlaupteZeichen = erlaupteZeichen.concat(zahlen);
  }
  if (sonderzeichenChecked) {
    erlaupteZeichen = erlaupteZeichen.concat(sonderzeichen);
  }

  /*
  --Kryptographie-basierte Zufallszahlen
  function getRandomInt(max) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % max;
  }
  --Einfügen anstelle von Math.floor
  const zufallZahl = getRandomInt(zeichenArray.length);
  */

  for (let i = 0; i < anzahlZeichnen; i++) {
    const zufallZahl = Math.floor(Math.random() * erlaupteZeichen.length);
    ausgabe += erlaupteZeichen[zufallZahl];
  }

  document.getElementById("output").innerHTML = ausgabe;

  if (ausgabe === "") {
    document.getElementById("output").innerHTML = "output";
  }
  if (erlaupteZeichen.length === 0) {
    document.getElementById("output").innerHTML = "output";
  }
}

function kopieren() {
  var kopierterText = ausgabe;

  navigator.clipboard.writeText(kopierterText).then(function () {
    alert("Der Text wurde kopiert: " + kopierterText);
  });
}
