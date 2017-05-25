function Bike() {
}

Bike.prototype.getCoordinates = function(id, displayCoordinates, bikeDiv) {
  $.get(`https://bikeindex.org:443/api/v3/bikes/${id}`)
    .then(function(response) {
      var latitude = response.bike.stolen_record.latitude;
      var longitude = response.bike.stolen_record.longitude;
      function Location(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
      }
      var newLocation = new Location(latitude, longitude);
      displayCoordinates(newLocation, bikeDiv);
      })
    .fail(function(error) {
      $('.output').text(error.responseJSON.message);
    });
};

Bike.prototype.listByProximity = function (zip, distance, displayBikes) {
  $.get(`https://bikeindex.org/api/v3/search?page=1&per_page=25&location=${zip}&distance=${distance}&stolenness=proximity`)
    .then(function(response) {
      var bikes = [];
        response.bikes.forEach(function(bike) {
        bikes.push(bike);
      });
      displayBikes(bikes);
    })
    .fail(function(error) {
      $('.output').text(error.responseJSON.message);
    });
};

exports.bikeModule = Bike;
