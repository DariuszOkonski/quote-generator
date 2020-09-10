// http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
// http://forismatic.com/en/api

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuote = document.getElementById("new-quote");

// get quote from api

async function getQuote() {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const proxyUrl = 'https://afternoon-hollows-80162.herokuapp.com/';
    // const apiUrl = 'http://api.forismatic.com/api/1.0/?method-getQuote&lang=en&format=json';
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
        if(data.value.joke.length > 100) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.value.joke;
    
    } catch (error) {
        console.log('Whoops, no quote: ', error);
    }

}

// on load
getQuote();