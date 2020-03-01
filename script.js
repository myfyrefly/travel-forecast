//current date


//these divs are for each data item needed - will go inside the <p> #weatherNow
var mainCard = $("#weatherNow")
var your20Icon = $("<div>").addClass("iconDiv")
var your20temp = $("<div>").addClass("tempDiv");
var your20humid = $("<div>").addClass("humidDiv");
var your20wind = $("<div>").addClass("windDiv");
var your20uv = $("<div>").addClass("uvDiv");

your20humid.text("test humid");

//adding my divs to my current city weather card
mainCard.append(your20Icon).append(your20temp).append(your20humid).append(your20wind).append(your20uv);


 var queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=78250,us&units=imperial&appid=69495130452b6690f1d83e33e635a5f7";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var nowTemp = (response.main.temp);
        var nowHumid = (response.main.humidity + '%')
        var nowWind = (response.wind.speed + 'mph')
                
        $("#currentCity").text(response.name + ', ' + response.sys.country)
        $(".card-header").html(moment().format('dddd' + ',' + ' MMMM Do'));
        //weather stats below
        your20Icon.text()
        your20temp.text('Temperature: ' + nowTemp);
       your20humid.text("Humidity: " + response.main.humidity + "%");
       your20wind.text("Wind Speed: " + response.wind.speed + " mph")
       
        
      console.log(response);
     });

     