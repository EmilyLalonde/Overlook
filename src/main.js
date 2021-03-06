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
    let day = today.getDate()
    return `${year}/${month}/${day}`
  }

  findRoomsAvailableToday(date = this.date) {
    let findBookingDates = this.bookingData.filter(function(booking) {
      return booking.date === date;
    })
    let findMatches = findBookingDates.map(function(booking) {
      return booking.roomNumber
    })
    return 50 - findMatches.length
  }

  findBookedRoomsToday(date = this.date) {
    let findBookingDates = this.bookingData.reduce(function(acc, room) {
      if (room.date === date) {
        acc.push(room.roomNumber)
      }
      return acc
    }, [])
    return findBookingDates
  }
 
  findAvalilibility(date = this.date) {
    let roomsTaken = this.bookingData.filter(function(booking) {
      return booking.date === date
    })
    let availableRooms = this.roomData.filter(function(room) {
      return roomsTaken.find(function(taken) {
        return taken.roomNumber !== room.number
      })
    })
    return availableRooms
  }
  
  findTotalRoomRevenueToday(date = this.date) {
    let roomData = this.roomData
    let bookedRoomNum = this.findBookedRoomsToday(date)
    let roomRevenue = bookedRoomNum.reduce(function(acc, num) {
      roomData.forEach(function(room) {
        if (num === room.number) {
          acc += room.costPerNight
        }
      })
      return acc
    }, 0)
    return roomRevenue
  }

  findTotalOrdersRevenueToday(date = this.date) {
    let ordersRevenue = this.roomServiceData.reduce(function(acc, order) {
      if (order.date === date) {
        acc += order.totalCost
      }
      return acc
    }, 0)
    return ordersRevenue
  }

  findTotalRevenueForToday(date = this.date) {
    return (this.findTotalRoomRevenueToday(date) + this.findTotalOrdersRevenueToday(date)).toFixed(2)
  }

  percentageOfRoomsBookedToday(date = this.date) {
    let bookingsToday = this.bookingData.filter(function(booking) {
      return booking.date === date;
    })
    return (bookingsToday.length / this.roomData.length).toFixed(2) * 100;
  }
}
export default Main