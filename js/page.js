var prevQuoteIndex = -1;

function setQuote() {
    var currentQuoteIndex = Math.floor(Math.random() * data.length);
    while (prevQuoteIndex == currentQuoteIndex) {
        currentQuoteIndex = Math.floor(Math.random() * data.length);
    }
    prevQuoteIndex = currentQuoteIndex;
    document.getElementById("spokentext").innerHTML=data[currentQuoteIndex].replace(/\n/g, "<br/>");
}

setQuote();
