const cityInput = document.getElementById('input-city');
const btn = document.getElementById('button');


/* listen button*/

btn.addEventListener('click', () => {

    getData(cityInput.value)

})

function getData(name) {
    /* Api Key*/
    const apiKey = 'dab83d9abfeb5378296143deea1689e4'
    /* Api Url*/
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`

    /* Fetch*/
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            const {name, sys: { country }, main: { temp, feels_like }, weather: [{ description }] } = data;
console.log(data)
            //HTMLs
            const city = document.getElementById('city');
            const temprature = document.getElementById('temprature');
            const weatherr = document.getElementById('weather');
            const feel = document.getElementById('feels')
            //Rendering data to html

            city.innerHTML = ` <i class="fa-solid fa-location-dot" style="width: 20px;"></i>${name}, ${country}`;
            temprature.innerText = ` ${temp.toFixed(1)} °`;
            weatherr.innerHTML = ` Weather: ${description}`;
            feel.innerHTML = ` feels_like: ${feels_like}`;
        })
        .catch(err => console.log(err))
        cityInput.value = '';
        cityInput.focus();
}

