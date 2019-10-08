// Import stylesheets
import './style.css';

const joke = document.getElementById("joke");
const button = document.getElementById("jokeButton");

const url = "https://icanhazdadjoke.com/"

document.addEventListener ('click', (event) => {
  if (event.target === button) {

    fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(resp);
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      })
    // joke.innerHTML = "";
  }
})