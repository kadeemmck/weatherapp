
const showWeather = (data) =>{
 console.log(data.current.temp_f)
const current_weather = data.current.temp_f
const change = data.current.condition.text
$("#condition").html(change)
$("#weather-value").html(current_weather)

}

$(document).ready(function() {
     const apiKey = "7d864e86ae114a9db1d150253181311"
    let city = "Paris"
     const weatherUrl = "https://api.apixu.com/v1/current.json?key=" + apiKey + "&q=" + city
  console.log( weatherUrl )
  
    $.ajax({
        url: weatherUrl,
        success: showWeather
    })

 });