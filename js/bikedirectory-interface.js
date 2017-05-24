var Bike = require('./../js/bikedirectory.js').bikeModule;

function displayBikes(bikes){
  bikes.forEach(function(bike){
    $('.stolen-output').append(`<li>${bike}</li>`);
  });
}

$(document).ready(function(){
  $('#generate-bikes').click(function(){
    var zip = $('#zip').val();
    var distance = parseInt($('#distance').val());
    var newSearch = new Bike();
    newSearch.listByProximity(zip, distance, displayBikes);
  });
});
