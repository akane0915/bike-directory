function Bike() {

}

Bike.prototype.listByProximity = function (zip, distance) {
  $.get(`https://bikeindex.org/api/v3/search?page=1&per_page=25&location=${zip}&distance=${distance}&stolenness=proximity`)
    .then(function(response) {
      console.log(response);
    })
    .fail(function(error) {
      $('.output').text(error.responseJSON.message);
    });
};

exports.bikeModule = Bike;
