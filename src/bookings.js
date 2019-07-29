class Bookings {
  constructor(bookingData) {
    this.bookingData = bookingData;
    this.date = this.returnDateToday();
  }
  returnDateToday() {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = today.getDate()
    return `${year}/${month}/${day}`
  }
  findMostPopularBookingDate() {
    let datesObj = this.bookingData.reduce(function(date, booking) {
      if (!date[booking.date]) {
        date[booking.date] = 1
      } else {
        date[booking.date]++
      }
      return date
    }, {})
    let mostPopular = Object.keys(datesObj).reduce(function(highestValue, currentValue) {
      if (datesObj[highestValue] > datesObj[currentValue]) {
        return highestValue;
      } else {
        return currentValue;
      }
    });
    return mostPopular
  }

  findLeastPopularBookingDate() {
    let datesObj = this.bookingData.reduce(function(date, booking) {
      if (!date[booking.date]) {
        date[booking.date] = 1
      } else {
        date[booking.date]++
      }
      return date
    }, {})
    let leastPopular = Object.keys(datesObj).reduce(function(lowestValue, currentValue) {
      if (datesObj[lowestValue] < datesObj[currentValue]) {
        return lowestValue;
      } else {
        return currentValue;
      }
    });
    return leastPopular
  }
}

export default Bookings