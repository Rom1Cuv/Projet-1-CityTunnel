function fetchData() {
    return new Promise(function(resolve, reject) {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=37.3925&longitude=-5.9940&hourly=temperature_2m')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let today = new Date();
            let hours =  today.getHours();
            resolve(data.hourly.temperature_2m[hours]);
        });
    })
}

const displayData = data => {
    const temp = document.querySelector('.temperature');
    temp.innerHTML = `<h3>Il fait actuellement ${data}°C à Séville.</h3>`;
}

const onError = err => console.log(`ERROR: ${err}`);

fetchData()
.then(displayData)
.catch(onError);