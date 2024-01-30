const jokeContainer = document.getElementById('jokeContainer');
const jokeBtn = document.getElementById('jokeBtn');

const generateJoke = async () => {
    const config = {
        headers: {
            Accept: 'Application/json'
        }
    }
    try{

        const res = await fetch('https://icanhazdadjoke.com', config);
        const data = await res.json()
        
        const jokes = document.createElement('p')
        jokeContainer.appendChild(jokes)
        
        jokes.innerHTML = data.joke;
    } catch(error){
        console.error("Error to call the Api;", error)
    }

}

generateJoke();
jokeBtn.addEventListener('click', generateJoke);


