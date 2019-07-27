class Main {
  constructor(roomData, roomServiceData) {
    this.date = this.returnDateToday();
    this.roomData = roomData;
    this.roomServiceData = roomServiceData;
    console.log(this.roomData)
    console.log(this.roomServiceData)
  }
  returnDateToday() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = d.getFullYear() + '/' + month + '/' + day;
    return output
  }
}

export default Main