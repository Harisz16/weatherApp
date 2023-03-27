const btn = document.querySelector(".search-btn");
const box = document.querySelector(".search-box");
const lan = document.querySelector(".lan");
const cloud = document.querySelector(".cloud");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const humi = document.querySelector(".humi");
const citsy = document.querySelector(".city");
const con = document.querySelector(".weather-detail");
const img = document.querySelector(".weather-img");
// box.value = "london";
// const city = box.value;
btn.addEventListener("click", () => {
  const city = box.value;
  console.log(city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aac54532bc6e8c60e576e4b5bc461637`
  )
    .then((response) => response.json())
    .then((data) => {
      if ((data.cod = "404")) {
        img.src = `/images/404.png`;
        // con.style.height = "400px";
        lan.innerHTML = "";
        cloud.innerHTML = "";
        temp.innerHTML = "";
        wind.innerHTML = "";
        humi.innerHTML = "";
        citsy.innerHTML = `Wrong City Name`;
      }

      lan.innerHTML = `Lon: ${data.coord.lon} lat:${data.coord.lat}`;
      cloud.innerHTML = data.weather[0].main;
      temp.innerHTML = data.main.temp;
      wind.innerHTML = data.wind.speed;
      humi.innerHTML = data.main.humidity;
      citsy.innerHTML = data.name;
      console.log(data.coord);
      // con.style.height = "400px";
      // con.style.overflow = "";
      img.src = __dirname+`/images/${data.weather[0].main}.png`;
    });
});
