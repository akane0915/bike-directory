var Bike = require('./../js/bikedirectory.js').bikeModule;

$(document).ready(function(){
  $('#generate-bikes').click(function(){
    var zip = $('#zip').val();
    var distance = parseInt($('#distance').val());
    var newSearch = new Bike();
    newSearch.listByProximity(zip, distance);
  });
});
