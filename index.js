// Import stylesheets
import './style.css';

const joke = document.getElementById("joke");
const button = document.getElementById("jokeButton");

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

newJoke();

document.addEventListener ('click', (event) => {
  if (event.target.id === 'jokeButton') {
    newJoke()
    console.log("done");

  }
})