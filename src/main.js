class Main {
  constructor(userData) {
    this.date = this.returnDateToday();
    this.userData = userData;
    console.log(this.userData)
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