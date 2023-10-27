
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
                case 'Clear':
                    image.src = 'https://th.bing.com/th/id/OIP.I6LVXh_0zAtL8OA6If2HTwHaFj?pid=ImgDet&rs=1';
                    break;

                case 'Rain':
                    image.src = "https://th.bing.com/th/id/R.c4a31a9542e390358f1bf62e72f9625a?rik=9vT%2fWAE4lqQuyQ&riu=http%3a%2f%2fcliparting.com%2fwp-content%2fuploads%2f2016%2f07%2fRain-cartoon-clipart-clipart-kid.png&ehk=XWWh4IWOe60Srwjg%2fdp7dvQ0i8jrRtuoGjoOdEijlWs%3d&risl=&pid=ImgRaw&r=0";
                    break;

                case 'Snow':
                    image.src = 'https://th.bing.com/th/id/R.864bc2cc7398d866485870ee8a69c194?rik=yER%2ftuvt67ovNg&riu=http%3a%2f%2ffullhdwall.com%2fwp-content%2fuploads%2f2016%2f06%2fHD-Snowflake.jpg&ehk=c0LCpQK6gqI%2f3H1QA1i913aB90GDefJFF7CBeuClEFI%3d&risl=&pid=ImgRaw&r=0';
                    break;

                case 'Clouds':
                    image.src = 'https://th.bing.com/th/id/R.fed5daf8a9d21fd008e4584474231600?rik=Flu2pyNjWwOdTA&riu=http%3a%2f%2fclipartix.com%2fwp-content%2fuploads%2f2017%2f07%2fClipart-cute-cloud.png&ehk=p35iZVSO5QGNfKX8MuOL2Cy7TnjYzgBqiUBJzlKGVnU%3d&risl=&pid=ImgRaw&r=0';
                    break;

                case 'Haze':
                    image.src = 'https://th.bing.com/th/id/R.a8d70f72c390f67a5033c85802ed53e1?rik=mZRL9jtxVjimTw&pid=ImgRaw&r=0';
                    break;

                default:
                    image.src = '';
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
