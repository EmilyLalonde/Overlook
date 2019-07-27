class Main {
  constructor(allData) {
    this.date = this.returnDateToday();
    this.allData = allData;
    console.log(this.allData)
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