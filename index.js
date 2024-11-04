const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const api_key = "2f1mSszZCQYoS3XBCaRlNA==4z00JougyxfhQD5p";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": api_key
    }
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke(){
    try {
        jokeEl.innerText = 'Updating...';
    btnEl.disabled = true;
    btnEl.innerText = 'Loading';
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = 'Tell me a joke';

    jokeEl.innerText = data[0].joke  
    } catch (error) {
        jokeEl.innerText = 'An error happened, try again later';
        // console.log(error);
    }

    // console.log(jokeEl);
};
// stopped at 50:00
btnEl.addEventListener('click', getjoke());

// End at 1:05:40
