 const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

const APIKey = 'ab1beac4edaa2a098f5d030699348872';
const city = document.querySelector('.search-box input').value;

if (city === '')
return;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

        if (json.cod === '404') {
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }
        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear' :
                image.src='https://ak3.picdn.net/shutterstock/videos/17521723/thumb/1.jpg';
                break;

                case 'Rain' :
                image.src='https://th.bing.com/th/id/OIP.aNY_KBcx1Eb-dqE62yb3GgHaId?pid=ImgDet&rs=1';
                break;
                
                case 'Snow' :
                image.src='https://th.bing.com/th/id/R.d3d20b114fc6b59d625e0fe1f3e62ce6?rik=c4FFOj0x45flRQ&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1665179.png&ehk=BtmErchf9LQ8R9hSOW8ZHiryR6D3Nhp8X5Yv041x7d4%3d&risl=&pid=ImgRaw&r=0';
                break;

                case 'Clouds' :
                image.src='https://th.bing.com/th/id/R.fed5daf8a9d21fd008e4584474231600?rik=Flu2pyNjWwOdTA&riu=http%3a%2f%2fclipartix.com%2fwp-content%2fuploads%2f2017%2f07%2fClipart-cute-cloud.png&ehk=p35iZVSO5QGNfKX8MuOL2Cy7TnjYzgBqiUBJzlKGVnU%3d&risl=&pid=ImgRaw&r=0';
                break;

                case 'Haze' :
                image.src='https://th.bing.com/th/id/OIP.t5HMxyBF4f3NOnlo7-S7vAHaEm?pid=ImgDet&rs=1';
                break;

                default: image.src='';
                  
            
            }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';


    });


});