// Import stylesheets
import './style.css';

const joke = document.getElementById("joke");
const button = document.getElementById("jokeButton");
const gif = document.getElementById("gif");

const url = 'https://icanhazdadjoke.com/';

const options = {
  method: 'GET',
  headers: {
    "Accept": 'application/json'
  } 
}


function newJoke() {
   fetch(url, options)
    .then(resp => {
      // console.log(resp.json)
      return resp.json();
    })
    .then(json => {
      joke.innerText = json.joke;
    })
    .catch(error => {
      console.err(error);
    })
}

const gifLink = "https://api.giphy.com/v1/gifs/search?api_key=hocrXROrKzZNjR9TKOdwfEt1OsEcK2Hr&q=cringe&limit=1&offset=0&rating=PG-13&lang=en"

function gifSearch() {
   fetch(gifLink)
    .then(resp1 => {
      return resp1.json();
    })
    .then(json1 => {
      newURL = json1.data[0].url;
      console.log(json1);
      console.log(newURL);
      gif.src = newURL;
    })
    .catch(error1 => {
      console.err(error1);
    })
}

newJoke();

document.addEventListener ('click', (event) => {
  if (event.target.id === 'jokeButton') {
    newJoke();
    gifSearch();
    console.log("done");

  }
})