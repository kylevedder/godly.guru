var prevQuoteIndex = -1;


function getQuote() {
   index = parseInt(Math.random() * quotes.length);
   while (index === prevQuoteIndex) {
       index = parseInt(Math.random() * quotes.length);  
   }
   prevQuoteIndex = index;
   return quotes[index];
}

function setText() {
    document.getElementById("spokentext").innerHTML = getQuote();
}

document.getElementById("advice").addEventListener("click", function(){
    setText();
});

setText();