var city;
var queryURL;
var APIKey;

$(".btn").on("click", function(event) {
    APIKey = "166a433c57516f51dfab1f7edaed8413";
    city = $(".cityName").val();
    event.preventDefault();
        queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid="+APIKey;

        $.ajax({
        url: queryURL,
        type: "GET"
      }).then(function(response){
          var cityName = response.name
            $(".city").prepend("<button type='button' class='light'>" + cityName + "-"+  moment().format('MMMM Do YYYY') + "</button>");
            $(".temp").text("Temperature (F) " + response.main.temp);
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + response.main.temp);

        });
    });
