var hotel = {
  name: 'Quay',
  rooms: 40,
  booked: 25,
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

var hotel2 = {
  name: 'Park',
  rooms: 120,
  booked: 77,
  checkAvailability2: function() {
    return this.rooms - this.booked;
  }
};

var elName2 = document.getElementById('hotelName2');
elName2.textContent = hotel2.name;

var elRooms2 = document.getElementById('rooms2');
elRooms2.textContent = hotel2.checkAvailability2;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
