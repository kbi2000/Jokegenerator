const button = document.querySelector('.container button');
const jokep = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded',async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  });
  
  const jokeData = await response.json();
  jokep.innerHTML = jokeData.joke;
});

button.addEventListener('click', async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  });
  
  const jokeData = await response.json();
  jokep.innerHTML = jokeData.joke;
});
