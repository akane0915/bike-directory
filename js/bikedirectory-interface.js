var Bike = require('./../js/bikedirectory.js').bikeModule;

function displayBikes(bikes){
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
        </ul></li>`);
  });
}

$(document).ready(function(){

  $('#generate-bikes').click(function(){
    var zip = $('#zip').val();
    var distance = parseInt($('#distance').val());
    var newSearch = new Bike();
    newSearch.listByProximity(zip, distance, displayBikes);
  });

  $('.show-on-click').click(function() {
    console.log(this);
    alert('you clicked');
    // this.bike_info.show();
  });
});
