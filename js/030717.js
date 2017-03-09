var hotelTwo = {
  name: 'Park',
  rooms: 120,
  booked: 77,
  checkAvailabilityTwo: function() {
    return this.rooms - this.booked;
  }
};

var elNameTwo = document.getElementById('hotelNameTwo');
elNameTwo.textContent = hotelTwo.name;

var elRoomsTwo = document.getElementById('roomsTwo');
elRoomsTwo.textContent = hotelTwo.checkAvailabilityTwo();
