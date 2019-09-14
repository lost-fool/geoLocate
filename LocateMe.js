var x = document.getElementById("omed");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
	//document.getElementById("from").value = "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
   x.innerHTML = "Latitude: " + position.coords.latitude + 
   "<br>Longitude: " + position.coords.longitude; 
}

$(document).ready(function(){
  $("p").on("click", function(){
    console.log("Success");
    getLocation();
  });
});
