var Bike = require('./../js/bikedirectory.js').bikeModule;

function displayBikes(bikes, displayCoordinates){
  bikes.forEach(function(bike){
    if (bike.thumb === null){
      bike.thumb = "http://www.toysrus.com/graphics/product_images/pTRU1-3049321enh-z6.jpg";
    }
    $('.stolen-output').append(`<li class="show-on-click">${bike.title}
      <ul class="bike-info">
        <li>Manufacturer: ${bike.manufacturer_name}</li>
        <li>Frame Model: ${bike.frame_model}</li>
        <li>Year: ${bike.year}</li>
        <li>Serial Number: ${bike.serial}</li>
        <li><img class="bike-img" src="${bike.thumb}"></li>
        <li class="hidden">${bike.id}</li>
        </ul></li>`);
  });
  $('.show-on-click').click(function(displayCoordinates) {
    $(this).children().toggle();
    var bike = $(this).children().children()[5];
    var bikeID = $(bike).text();
    var newCoordinates = new Bike();
    var bikeDiv = this;
    function displayCoordinates(location, bikeDiv) {
      // console.log(location);
      $(bikeDiv).append(`<h1>${location.latitude}</h1>`)
    }
    var location = newCoordinates.getCoordinates(bikeID, displayCoordinates, bikeDiv);
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
