var prevQuoteIndex = -1;


function getQuote() {
   ++prevQuoteIndex;
    if (prevQuoteIndex >= quotes.length) {
        prevQuoteIndex = 0;   
    }
    return quotes[prevQuoteIndex];
}

function setText() {
    document.getElementById("spokentext").innerHTML = getQuote();
}

document.getElementById("advice").addEventListener("click", function(){
    setText();
});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

quotes = shuffle(quotes);
setText();
