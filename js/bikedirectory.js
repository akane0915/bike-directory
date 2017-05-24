function Bike() {
}

Bike.prototype.listByProximity = function (zip, distance, displayBikes) {
  $.get(`https://bikeindex.org/api/v3/search?page=1&per_page=25&location=${zip}&distance=${distance}&stolenness=proximity`)
    .then(function(response) {
      var bikes = [];
      response.bikes.forEach(function(bike) {
        bikes.push(bike.frame_model);
      });
      displayBikes(bikes);
    })
    .fail(function(error) {
      $('.output').text(error.responseJSON.message);
    });
};

exports.bikeModule = Bike;
