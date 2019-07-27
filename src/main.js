class Main {
  constructor(roomData, roomServiceData, bookingData) {
    this.date = this.returnDateToday();
    this.roomData = roomData;
    this.roomServiceData = roomServiceData;
    this.bookingData = bookingData;
  }
  returnDateToday() {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate())
    return `${year}/${month}/${day}`
  }

  // findBookingDatesForToday(date = this.date) {
  //   let findBookingDates = this.bookingData.filter(function(booking) {
  //     return booking.date === date;
  //   })
  //   console.log(findBookingDates)
  //   let findRooms = this.roomData.filter(function(room) {
  //     return room === findBookingDates.roomNumber
  //   })
  //   return findRooms
  // }

  percentageOfRoomsBookedToday(date = this.date) {
    let bookingsToday = this.bookingData.bookings.filter(function(booking) {
      return booking.date === date;
    })
    return (bookingsToday.length / this.roomData.rooms.length).toFixed(2) * 100;
  }
}
export default Main