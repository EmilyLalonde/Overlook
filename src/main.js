class Main {
  constructor(roomData, roomServiceData, bookingData) {
    this.date = this.returnDateToday();
    this.roomData = roomData;
    this.roomServiceData = roomServiceData;
    this.bookingData = bookingData;
    console.log(this.roomData)
    console.log(this.roomServiceData)
    console.log(this.bookingData)
  }
  returnDateToday() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = d.getFullYear() + '/' + month + '/' + day;
    return output
  }
  findRoomsAvailable() {
    console.log(this.bookingData.bookings)
    let findBookingDates = this.bookingData.bookings.filter(function(booking) {
      return booking.date === this.date
    })
    return findBookingDates
  }
}
export default Main