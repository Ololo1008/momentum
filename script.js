
function showTime() {
  const now = new Date(),
    clock = document.querySelector("time");
  clock.innerHTML = now.toLocaleTimeString();
  setTimeout(showTime, 1000);
  setTimeout(showDate, 1000);
  setTimeout(getTimeOfDay,1000);


}
showTime();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
function showDate() {
  const date = new Date(),

    dateWindow = document.querySelector('date'),
    options = {weekday: "long" , month: 'long', day: 'numeric' };
  dateWindow.innerHTML = date.toLocaleDateString('ru', options);

}


function getTimeOfDay() {
  const date = new Date(),
    hour = date.getHours(),
    greeting = document.getElementById('greeting');

  if (hour <= 6) {
    message = 'Доброй ночи,';
  } else if (hour <= 12) {
    message = 'Доброе утро,';
  } else if (hour <= 18) {
    message = 'Добрый день,';
  } else {
    message = 'Добрый вечер,';
  }
  greeting.innerHTML = message;
}


let name = document.querySelector('.name');

function setLocalStorage(){
  localStorage.setItem('name',name.value);
}
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)







async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=5d29685963b9de92e225b5717760d2c7&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
getWeather()


const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

const city = document.querySelector('.city')

city.addEventListener('keyup', event => {
  if (event.code === 'Enter') {
    getWeatherS()
  };
});

async function getWeatherS() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=5d29685963b9de92e225b5717760d2c7&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}



// async function getQuotes() {  
//   const quotes = 'data.json';
//   const res = await fetch(quotes);
//   const data = await res.json(); 
//   const quote = document.querySelector('.quote');
// console.log(data)
// quote.innerHTML = data;
// }
// getQuotes();






const quotes = [
  {
    quote: "Даже самый маленький котёнок - шедевр природы",
    author: "Леонардо да Винчи"
  },
  {
    quote: "Бог сотворил кошку для того, чтобы у человека был тигр, которого можно погладить",
    author: "Виктор Гюго"
  },
  {
    quote: "Думаю, что кошки - это духи, спустившиеся на землю",
    author: "Жюль Верн"
  }
]
const quotess = document.getElementById('quote');
const authorss = document.getElementById('author');

function randomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  quotess.innerHTML = quotes[random].quote;
  authorss.innerHTML = quotes[random].author;
}
randomQuote()
document.querySelector(".change-quote").addEventListener('click', randomQuote);



const audio = new Audio();
const audioClick = document.getElementById('play');
function playAudio() { 
  audioClick.classList.toggle('pause');
  audio.src = playlist[0].src;
  audio.currentTime = 0;
  audio.play()

}

let isPlaying = true;

function playPause(){{console.log('paus')

  isPlaying ? audio.play() : audio.pause();
};

audio.onplaying = function() {
  isPlaying =false ;
};
audio.onpause = function() {
  isPlaying = true;
};}




audioClick.addEventListener('click', playAudio);
audioClick.addEventListener('click', playPause);


const playlist = [
  {
    title: 'AquaCaelestis',
    src: '../assets/sounds/AquaCaelestis.mp3',
    duration: '00:58'
  },
  {
    title: 'River Flows In You',
    src: '../assets/sounds/River Flows In You.mp3',
    duration: '03:50'
  },
  {
    title: 'Ennio Morricone',
    src: '../assets/sounds/Ennio Morricone.mp3',
    duration: '01:37'
  },
  {
    title: 'Summer Wind',
    src: '../assets/sounds/Summer Wind.mp3',
    duration: '01:50'
  }
]

const playNext = document.getElementById('play-next');
function randomPlay() {
  console.log('dddd')
  let count=0;
  let random = Math.floor(Math.random() * playlist.length);
  audio.src = playlist[random].src;
  audio.play();
}
playNext.addEventListener('click', randomPlay) 

const playPrev = document.getElementById('play-prev');

playPrev.addEventListener('click', randomPlay) 