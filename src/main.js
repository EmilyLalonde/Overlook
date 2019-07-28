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

  findBookingDatesForToday(date = this.date) {
    let findBookingDates = this.bookingData.filter(function(booking) {
      return booking.date === date;
    })
    return this.roomData.filter(function(room) {
      let findMatches = findBookingDates.map(function(booking) {
        return booking.roomNumber
      })
      return 50 - findMatches.length
    })
  }

  findTotalRevenueForToday() {

  }

  percentageOfRoomsBookedToday(date = this.date) {
    let bookingsToday = this.bookingData.filter(function(booking) {
      return booking.date === date;
    })
    return (bookingsToday.length / this.roomData.length).toFixed(2) * 100;
  }
}
export default Main