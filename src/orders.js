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
}

export default Orders