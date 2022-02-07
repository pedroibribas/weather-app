const express = require("express");
const https = require("https");
const app = express();
const date = require(`${__dirname}/date.js`);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = process.env.PORT || 3000;

// Get current year
const year = date.getYear();

// Init request status code
let status = "";

// Init weather data
let weatherData = [];

app.get("/", (req, res) => {
  weatherData.lenght === 0 ? res.render("index") : res.render("index", { year: year, data: weatherData, status: status });
  // Reset weather data
  weatherData = [];
  // Reset status
  status = "";
});

app.post("/", (req, res) => {
  // URL
  const query = req.body.cityName;
  const apiKey = process.env.API_KEY;
  const lang = "pt_br";
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&lang=${lang}&units=${unit}`;
  // Http call
  https.get(url, response => {
    switch (response.statusCode) {
      case 404:
        status = response.statusCode;
        res.redirect("/");
        console.log("Cidade não encontrada.");
        break;
      case 401:
        status = response.statusCode;
        res.redirect("/");
        console.error("ApiKey não autorizada.");
        break;
      default:
        status = response.statusCode;
        response.on("data", data => {
          console.log(`Status: ${response.statusCode}`);
          const resData = JSON.parse(data);
          // Get data
          const name = resData.name;
          const country = resData.sys.country;
          const temp = Math.floor(resData.main.temp);
          const description = resData.weather[0].description;
          const icon = resData.weather[0].icon;
          const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
          const humidity = resData.main.humidity;
          const windSpeed = resData.wind.speed;
          const today = date.getDate();
          // Set weather data
          weatherData = {
            name,
            country,
            temp,
            description,
            imageURL,
            humidity,
            windSpeed,
            today
          };
          res.redirect("/");
        });
    }
  });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
