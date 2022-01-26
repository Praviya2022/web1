function iWarriors() {
    window.location = "iWarriors.html";
}

function medi() {
    window.location = "medi.html";
}

function strikers() {
    window.location = "strikers.html";
}

function bulls() {
    window.location = "bulls.html";
}

function stat() {
    window.location = "stat.html";
}

function thunders() {
    window.location = "thunders.html";
}

function pageReload() {
    var x = window.location = "index.html";
    x.location.reload();
}

function pageReloadStart() {
    setInterval(pageReload, 30000);

}


//match1 bulls vs stat

var bullsTotal;
var bullsOvers;

//bullsMembers

var kavishkaRuns = 0;
var kavishkaBalls = 0;

var nipulRuns = 0;
var nipulBalls = 0;

var bhanuka = 0;
var bhanuksBalls = 0;

var bimsaraRuns = 0;
var bimsaraBalls = 0;

var sasankaRuns = 0;
var sasankaBalls = 0;

var lasithRuns = 0;
var lasithBalls = 0;

var sanuthRuns = 0;
var sanuthBalls = 0;

var lakruwanRuns = 0;
var lakruwanBalls = 0;

var lumbiniRuns = 0;
var lumbiniBalls = 0;

var chathuniRuns = 0;
var chathuniBalls = 0;

var mashaRuns = 0;
var mashaBalls = 0;

var extras = 0;

var bullsTotalRuns = 0;

function match1() {
    //team bulls
    bullsTotal = document.getElementById("bullsTotal");
    kavishkaRuns = document.getElementById("kavishkaRuns");
    kavishkaBalls = document.getElementById("kavishkaBalls");
    nipulRuns = document.getElementById("nipulRuns");
    nipulBalls = document.getElementById("nipulBalls");
    bhanukaRuns = document.getElementById("bhanukaRuns");
    bhanuksBalls = document.getElementById("bhanuksBalls");
    bimsaraRuns = document.getElementById("bimsaraRuns");
    bimsaraBalls = document.getElementById("bimsaraBalls");
    sasankaRuns = document.getElementById("sasankaRuns");
    sasankaBalls = document.getElementById("sasankaBalls");
    lasithRuns = document.getElementById("lasithRuns");
    lasithBalls = document.getElementById("lasithBalls");
    sanuthRuns = document.getElementById("sanuthRuns");
    sanuthBalls = document.getElementById("sanuthBalls");
    lakruwanRuns = document.getElementById("lakruwanRuns");
    lakruwanBalls = document.getElementById("lakruwanBalls");
    lumbiniRuns = document.getElementById("lumbiniRuns");
    lumbiniBalls = document.getElementById("lumbiniBalls");
    chathuniRuns = document.getElementById("chathuniRuns");
    chathuniBalls = document.getElementById("chathuniBalls");
    mashaRuns = document.getElementById("mashaRuns");
    mashaBalls = document.getElementById("mashaBalls");


    bullsTotalRuns = extras + chathuniRuns + mashaRuns + lumbiniRuns + lakruwanRuns + sanuthRuns + kavishkaRuns + nipulRuns + bhanukaRuns + bimsaraRuns + sasankaRuns + lasithRuns

    bullsTotal.innerHTML = kavishkaRuns;

}