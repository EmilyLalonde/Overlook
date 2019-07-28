class Orders {
  constructor(roomServiceData) {
    this.roomServiceData = roomServiceData;
    this.date = this.returnDateToday();
  }
  returnDateToday() {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate())
    return `${year}/${month}/${day}`
  }

  findAllOrdersForToday(date = this.date) {
    let ordersToday = this.roomServiceData.filter(function(orders) {
      return orders.date === date;
    })
    console.log(ordersToday)
    return ordersToday
  }
}

export default Orders