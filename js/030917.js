

function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;

  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

var quayHotel = new Hotel('Quay', 40, 25);
var stuHotel = new Hotel('Stuart', 3, 0);

var elName = document.getElementById('hotel-name');
elName.textContent = stuHotel.checkAvailability();
