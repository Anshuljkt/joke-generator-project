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

const gifLink = "https://api.giphy.com/v1/gifs/random?api_key=Jrn0ejSEASggu0wCdknGEcbXd918s5ZI&tag=cringe&rating=G"

function gifSearch() {
   fetch(gifLink)
    .then(resp1 => {
      return resp1.json();
    })
    .then(json1 => {
      // console.log(json1);
      // newURL = json1.data[0].images.fixed_height.url;
      // newURL = json1.data[0].images.fixed_height.url;
      // console.log(json1.data[0].images.fixed_height.url);
      console.log(json1);
      const newjson = json1;
      gif.src = newjson.data.images.fixed_height.url;
    })
    .catch(error1 => {
      console.err(error1);
    })
}

newJoke();
gifSearch();

document.addEventListener ('click', (event) => {
  if (event.target.id === 'jokeButton') {
    newJoke();
    gifSearch();
    console.log('done');
  }
})