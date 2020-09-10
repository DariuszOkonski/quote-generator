// http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
// http://forismatic.com/en/api

// get quote from api

async function getQuote() {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const proxyUrl = 'https://afternoon-hollows-80162.herokuapp.com/';
    // const apiUrl = 'http://api.forismatic.com/api/1.0/?method-getQuote&lang=en&format=json';
    const apiUrl = 'https://api.icndb.com/jokes/random';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        console.log(data.value.id);
        console.log(data.value.joke);
    } catch (error) {
        console.log('Whoops, no quote: ', error);
    }

}

// on load
getQuote();