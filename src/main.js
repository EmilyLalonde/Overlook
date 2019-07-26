class Main {
  constructor(date) {
    this.date = date;
  }
  returnDateToday() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = d.getFullYear() + '/' + month + '/' + day;
    return output
  }
}

module.exports = Main