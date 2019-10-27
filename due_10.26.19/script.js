$(".btn").on("click", function (event) {
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var city = $(".cityName").val();
    event.preventDefault();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        type: "GET"
    }).then(function (response) {
        var cityName = response.name
        iconCode = response.weather[0].icon
        var icon = "http://openweathermap.org/img/w/"+iconCode+".png"
        $(".pastCityName").prepend("<button type='button' class='light'id='oldCityBtn'>" + cityName + "</button>");
        $(".city").text(cityName + " ("+moment().format('L')+")");
        $(".icon").html("<img src='" + icon  + "'>");        
        $(".temp").text("Temperature (F): " + response.main.temp);
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
    });
});

$(".btn").on("click", function (event) {
    APIKey = "166a433c57516f51dfab1f7edaed8413";
    city = $(".cityName").val();
    event.preventDefault();
    var queryFiveDay = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&appid=" + APIKey;

    $.ajax({
        url: queryFiveDay,
        type: "GET"
    }).then(function (response) {
        iconCodeOne = response.list[0].weather[0].icon
        var iconOne = "http://openweathermap.org/img/w/"+iconCodeOne+".png"
        iconCodeTwo = response.list[7].weather[0].icon
        var iconTwo = "http://openweathermap.org/img/w/"+iconCodeTwo+".png"
        iconCodeThree = response.list[15].weather[0].icon
        var iconThree = "http://openweathermap.org/img/w/"+iconCodeThree+".png"
        iconCodeFour = response.list[23].weather[0].icon
        var iconFour = "http://openweathermap.org/img/w/"+iconCodeFour+".png"
        iconCodeFive = response.list[30].weather[0].icon
        var iconFive = "http://openweathermap.org/img/w/"+iconCodeFive+".png"
        lat = response.city.coord.lat;
        lon = response.city.coord.lon;

        $(".dateOne").text(moment().add(1,'d'));
        $(".iconOne").html("<img src='" + iconOne  + "'>");
        $(".tempOne").text("Temp F: "+((response.list[0].main.temp - 273.15) * 1.80 + 32).toFixed(0));
        $(".humidityOne").text("Humidity:"+response.list[0].main.humidity);

        $(".dateTwo").text(moment().add(2,'d'));
        $(".iconTwo").html("<img src='" + iconTwo  + "'>");
        $(".tempTwo").text("Temp F: "+((response.list[7].main.temp - 273.15) * 1.80 + 32).toFixed(0));
        $(".humidityTwo").text("Humidity:"+response.list[7].main.humidity);
       
        $(".dateThree").text(moment().add(3,'d'));
        $(".iconThree").html("<img src='" + iconThree  + "'>");
        $(".tempThree").text("Temp F: "+((response.list[15].main.temp - 273.15) * 1.80 + 32).toFixed(0));
        $(".humidityThree").text("Humidity:"+response.list[15].main.humidity);
       
        $(".dateFour").text(moment().add(4,'d'));
        $(".iconFour").html("<img src='" + iconFour  + "'>");
        $(".tempFour").text("Temp F: "+((response.list[23].main.temp - 273.15) * 1.80 + 32).toFixed(0));
        $(".humidityFour").text("Humidity:"+response.list[23].main.humidity);
       
        $(".dateFive").text(moment().add(5,'d'));
        $(".iconFive").html("<img src='" + iconFive  + "'>");
        $(".tempFive").text("Temp F: "+((response.list[30].main.temp - 273.15) * 1.80 + 32).toFixed(0));
        $(".humidityFive").text("Humidity:"+response.list[30].main.humidity);

    });
});

// var lat = response.city.coord.lat;
// var lon = response.city.coord.lon;
// console.log(lat)
// console.log(lon)
// $(".btn").on("click", function (event) {
//     APIKey = "166a433c57516f51dfab1f7edaed8413";
//     event.preventDefault();
//     var queryUV = "http://api.openweathermap.org/data/2.5/uvi?appid="+APIKey+"&lat="+lat+"&lon="+lon;

//     $.ajax({
//         url: queryUV,
//         type: "GET"
//     }).then(function (response) {
//         $(".uv").text("UV Index: " + response.value);
//     });
// });

var cityList
$(".btn").on("click", function (event) {
    event.preventDefault();

    var cityInput = $(".cityName").val();

cityList=JSON.parse(localStorage.getItem("city"))
if (!cityList){
    cityList=[]
}
cityList.push({cityInput})
localStorage.setItem("city",JSON.stringify(cityList))
});

$(".light").on("click","#oldCityBtn", function (event) {
    event.preventDefault();
    oldCity=localStorage.getItem("cityInput",data);
    $(".cityName").text(oldCity)
});

