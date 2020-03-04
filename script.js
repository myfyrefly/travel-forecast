//these divs are for Current City Weather
var mainCard = $("#weatherNow")
var your20Icon = $("<img>").addClass("iconDiv")
var your20temp = $("<h6>").addClass("tempDiv");
var your20humid = $("<h6>").addClass("humidDiv");
var your20wind = $("<h6>").addClass("windDiv");
var your20uv = $("<h6>").addClass("uvDiv");

//these divs are for the 5-day Cards
var day1Card = $("#day1Card")
var card1Date = $("<div>")
var card1Icon = $("<img>")
var card1Temp = $("<div>")
var card1Humidity = $("<div>")

var day2Card = $("#day2Card")
var card2Date = $("<div>")
var card2Icon = $("<img>")
var card2Temp = $("<div>")
var card2Humidity = $("<div>")

//append divs to cards
day1Card.append(card1Date).append(card1Icon).append(card1Temp).append(card1Humidity);
day2Card.append(card2Date).append(card2Icon).append(card2Temp).append(card2Humidity);

 
//adding my divs to my current city weather card
mainCard.append(your20Icon).append(your20temp).append(your20humid).append(your20wind).append(your20uv);

//my search button click event - search for weather of specific cities
$("#searchWeather").click(function(){
  var city = $("#city").val();
  //city search current weather
  var cityQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=69495130452b6690f1d83e33e635a5f7";
  //five-day forcast
  var fiveDayQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=69495130452b6690f1d83e33e635a5f7";

      $.ajax({
        url: cityQueryURL,
        method: "GET"
      }).then(function(data) {
        
        var nowIcon = "https://openweathermap.org/img/wn/" + (data.weather[0].icon) + ".png";
        var nowTemp = (data.main.temp);
        var nowHumid = (data.main.humidity + '%')
        var nowWind = (data.wind.speed + 'mph')

        //city and date
        $("#currentCity").text(data.name + ', ' + data.sys.country)
        $(".card-header").html(moment().format('dddd' + ',' + ' MMMM D'));
        //weather stats below
        your20Icon.attr("src", nowIcon);
        your20temp.text("Temperature: " + nowTemp );
        your20humid.text("Humidity: " + data.main.humidity + "%");
        your20wind.text("Wind Speed: " + data.wind.speed + " mph")
      });

      $.ajax({
        url: fiveDayQueryURL,
        method: "GET"
      }).then(function(fiver) {
        console.log(fiver);
        //card dates
        var day1Date = moment.unix(fiver.list[0].dt).format("dddd, MMMM, D");
        var day2Date = moment.unix(fiver.list[1].dt).format("dddd, MMMM, D");
        var day3Date = moment.unix(fiver.list[2].dt).format("dddd, MMMM, D");
        var day4Date = moment.unix(fiver.list[3].dt).format("dddd, MMMM, D");
        var day5Date = moment.unix(fiver.list[4].dt).format("dddd, MMMM, D");

        var day1Icon = "https://openweathermap.org/img/wn/" + (fiver.list[0].weather[0].icon) + ".png";
        var day1Temp = fiver.list[0].main.temp;
        var day1Humid = fiver.list[0].main.humidity + " %";
        //day 2 card
        
      

        
        
        
      })
   
  });
 


 
