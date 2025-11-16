function getJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
        const jokeText = data.setup + " - " + data.punchline;
        document.getElementById("joke").innerText = jokeText;
    })
        .catch(error => console.error(error))
}