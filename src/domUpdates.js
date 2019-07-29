import $ from 'jquery';

const domUpdates = {
  findSelectedDateForOrders() {
    $('.find-date-orders').on('click', function() {
      let selectedDate = new Date($('#orders-on-date').val());
      let year = selectedDate.getFullYear();
      let month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      let day = selectedDate.getDate() + 1
      console.log(`${year}/${month}/${day}`)
      return `${year}/${month}/${day}`
    });
  }
}

export default domUpdates;