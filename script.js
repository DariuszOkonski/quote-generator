// http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
// http://forismatic.com/en/api

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

const charactersLimit = 100;
// get quote from api

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    if(!loader.hidden) {
        loader.hidden = true;
        quoteContainer.hidden = false;
    }
}

async function getQuote() {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const proxyUrl = 'https://afternoon-hollows-80162.herokuapp.com/';
    // const apiUrl = 'http://api.forismatic.com/api/1.0/?method-getQuote&lang=en&format=json';
    showLoadingSpinner();
    const apiUrl = 'https://api.icndb.com/jokes/random';
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // if author is blank, add Unknown
        if(data.value.id === '') {
            authorText.innerText = "Unknown";
        } else {
            authorText.innerText = data.value.id;
        }

        // reduce font size for long quotes
        if(data.value.joke.length > charactersLimit) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.value.joke;
        removeLoadingSpinner();

    } catch (error) {
        console.log('Whoops, no quote: ', error);
    }

}

// tweet quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;

    window.open(twitterUrl, '_blank');
}

// event listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);


// on load
getQuote();
