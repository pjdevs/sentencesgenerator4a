/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function takeRandom(array) {
    return array[Math.floor((Math.random() * (array.length - 1)) + 1)];
}

function demiPhrase() {
    'use strict';
    
    var subj, adj1, verb, nom, adj2, categorie1 = Math.floor((Math.random() * 5) + 1), categorie2 = Math.floor((Math.random() * 5) + 1);
    
    //Sujet adj verbe
    //Nom
    if (categorie1 === 1) {
        subj = takeRandom(shuffle(nouns.noms));
        adj1 = "";
        verb = takeRandom(shuffle(verbs.singulier));
    }

    //Masculin sing
    if (categorie1 === 2) {
        subj = takeRandom(shuffle(nouns.singulier));
        adj1 = takeRandom(shuffle(adjs.singulier));
        verb = takeRandom(shuffle(verbs.singulier));
    }

    //Masculin plur
    if (categorie1 === 3) {
        subj = takeRandom(shuffle(nouns.pluriel));
        adj1 = takeRandom(shuffle(adjs.pluriel));
        verb = takeRandom(shuffle(verbs.pluriel));
    }

    //Féminin sing
    if (categorie1 === 4) {
        subj = takeRandom(shuffle(nouns.fsingulier));
        adj1 = takeRandom(shuffle(adjs.fsingulier));
        verb = takeRandom(shuffle(verbs.singulier));
    }

    //Féminin plur
    if (categorie1 === 5) {
        subj = takeRandom(shuffle(nouns.fpluriel));
        adj1 = takeRandom(shuffle(adjs.fpluriel));
        verb = takeRandom(shuffle(verbs.pluriel));
    }

    //Complément d'objet
    //Nom
    if (categorie2 === 1) {
        do {
            nom = takeRandom(shuffle(nouns.noms));
        } while (nom === subj);
        adj2 = "";
    }

    //Masculin sing
    if (categorie2 === 2) {
        do {
            nom = takeRandom(shuffle(nouns.singulier));
            adj2 = takeRandom(shuffle(adjs.singulier));
        } while (adj1 === adj2 || nom === subj);
    }

    //Masculion plur
    if (categorie2 === 3) {
        do {
            nom = takeRandom(shuffle(nouns.pluriel));
            adj2 = takeRandom(shuffle(adjs.pluriel));     
        } while (nom === subj || adj1 === adj2);
    }

    //Féminin sing
    if (categorie2 === 4) {
        do {
            nom = takeRandom(shuffle(nouns.fsingulier));
            adj2 = takeRandom(shuffle(adjs.fsingulier));
        } while (nom === subj || adj1 === adj2);
    }

    //Féminin plur
    if (categorie2 === 5) {
        do {
            nom = takeRandom(shuffle(nouns.fpluriel));
            adj2 = takeRandom(shuffle(adjs.fpluriel));
        } while (nom === subj || adj1 === adj2);
    }

    return subj + " " + adj1 + " " + verb + " " + nom + " " + adj2;
}

function transition() {
    'use strict';
    
    return takeRandom(shuffle(transitions));   
}

function place() {
    'use strict';
    
    return takeRandom(shuffle(places));   
}

function maj(str) {
    'use strict';
    
    return str.charAt(0).toUpperCase() + str.substring(1);
}