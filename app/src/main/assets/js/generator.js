var genBtn = document.getElementById("generate");
var sayBtn = document.getElementById("say");
var sentenceText = document.getElementById("sentence");

function generatePhrase() {
    var sentence = (maj(demiPhrase()) + " " + transition() + " " + demiPhrase() + " " + place())
    .replace(/ que un/gi, " qu'un")
    .replace(/ que une/gi, " qu'une");

    sentenceText.value = sentence;
}

genBtn.onclick = generatePhrase;

sayBtn.onclick = function() {
    try {
        Android.speak(sentenceText.value);
    } catch (err) {
	       sentenceText.value = "Error while speaking";
	   }
};
