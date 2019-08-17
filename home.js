
var data = [
    {
     "name": "Alexa vector",
     "location": "Barrie ",
     "description": "$360 Say “Hey Vector.” Robot sidekicks are now a reality. Aware and reactive, Vector evolves with regular updates. Start the journey with him now. Alive with personality, he’s excited to see you and reacts to sound, sight, and touch. Always happy to help, he’ll answer questions, take photos for you, set a timer for dinner, and more. Independent and alert, he self-charges, navigates around objects, and avoids edges. Smart and getting smarter, he’s cloud connected for updates to bring new capabilities and features to be a better helper at home.",
     "image":"vector.png",
     "price":"$360",
    },

    {
      "name": "Led eye lashes",
      "location": "Newmarket",
      "description": "Make your Halloween more special this time and make it more interesting with these flashy eye led lights.",
      "image": "ledLights.jpg",
      "price":"$10",

    },

]

var htmlText = '';

for ( var key in data ) {
htmlText += '<div style="box-shadow: 0 4px 8px 0 rgba(0,0,255, 0.1); text-align: center;font-family: arial;" class="div-conatiner">';
htmlText += '<h2 class="p-name"> Name: ' + data[key].name + '</h2>';
htmlText += '<img style=" max-width: 300px;" src= ' +data[key].image +'>';
htmlText += '<h3 class="p-loc"> Location: ' + data[key].location + '</h3>';
htmlText += '<h3 class="p-loc"> Price: ' + data[key].price + '</h3>';

htmlText += '<h4 class="p-desc"> Description: ' + data[key].description + '</h4>';
htmlText += '</div>';
}

$('body').append(htmlText);

        function getJSONMarkers() {
          const markers = [
            {
              name:  "  ",
              location: [44.373356, 79.696755]
            },
            {
              name: "Led eye lashes",
              location: [44.049531,  79.464125]
            },
          ];
          return markers;
        }

        function loadMap() {
          // Initialize Google Maps
          const mapOptions = {
            center:new google.maps.LatLng(44.049531,79.696755),
            zoom: 11
          }
          const map = new google.maps.Map(document.getElementById("map"), mapOptions);

          // Load JSON Data
          const hotelMarkers = getJSONMarkers();

          // Initialize Google Markers
          for(hotel of hotelMarkers) {
            let marker = new google.maps.Marker({
              map: map,
              position: new google.maps.LatLng(hotel.location[0], hotel.location[1]),
              title: hotel.name
            })
          }
        }
