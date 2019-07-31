//image and file imports
import $ from 'jquery';
import Main from './main.js'
import Orders from './orders.js';
import Bookings from './bookings.js'
import domUpdates from '../src/domUpdates.js';
import './css/base.scss';
import './images/twitter.svg'
import './images/instagram.svg'
import './images/facebook.svg'
import './images/linkedin.svg'
import './images/rooms-1.jpg'
import './images/rooms-2.jpg'
import './images/rooms-3.jpg'
import './images/rooms-4.jpg'
import './images/rooms-5.jpg'
import './images/rooms-6.jpg'
import './images/rooms-7.jpg'
import './images/rooms-8.jpg'
import './images/orders-1.jpg'
import './images/orders-2.jpg'
import './images/orders-3.jpg'
import './images/orders-4.jpg'
import './images/orders-5.jpg'
import './images/orders-6.jpg'
import './images/orders-7.jpg'
import './images/orders-8.jpg'
import './images/customers-1.jpg'
import './images/customers-2.jpg'
import './images/customers-3.jpg'
import './images/customers-4.jpg'
import './images/customers-5.jpg'
import './images/customers-6.jpg'
import './images/customers-7.jpg'
import './images/customers-8.jpg'
import Customer from './customer.js';

//trying to make fetch happen

let userData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    userData = dataset.users;
  });

let roomData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    roomData = dataset.rooms;
  });

let bookingData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    bookingData = dataset.bookings;
  });

let roomServiceData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    roomServiceData = dataset.roomServices;
  });

$(document).ready(function() {
  setTimeout(function () {
    let main = new Main(roomData, roomServiceData, bookingData);
    let orders = new Orders(roomServiceData)
    let booking = new Bookings(bookingData)
    $('.main-site').hide();
    $('.rooms-tab-footer').hide();
    $('.orders-tab-footer').hide();
    $('.customers-tab-footer').hide();


    $('.splash-page-enter-button').on('click', () => {
      $('.splash-page').hide();
      $('.main-site').show();
    });

    $('ul.tabs li').click(function() {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })

    $('.todays-date').text(main.returnDateToday());
    $('.percentage-rooms').text(main.percentageOfRoomsBookedToday() + '%');
    $('.rooms-available').text(main.findRoomsAvailableToday());
    $('.daily-revenue').text('$' + main.findTotalRevenueForToday());
    

    function findSelectedDateForOrders() {
      let selectedDate = new Date($('#orders-on-date').val());
      let year = selectedDate.getFullYear();
      let month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      let day = String(selectedDate.getDate() + 1).padStart(2, '0');
      let dayPicked = `${year}/${month}/${day}`
      let ordersData = roomServiceData.filter(function(order) {
        console.log(dayPicked)
        return order.date === dayPicked
      })
      console.log(ordersData)
      if (ordersData.length > 0) {
        return ordersData
      } else {
        console.log('Sorry there were no orders today')
        return 'Sorry there were no orders today'
      }
    }

    function findSelectedDateForRooms() {
      let selectedDate = new Date($('#rooms-by-date').val());
      let year = selectedDate.getFullYear();
      let month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      let day = String(selectedDate.getDate() + 1).padStart(2, '0');
      let daySelected = `${year}/${month}/${day}`
      let findBookingDates = bookingData.reduce(function(acc, room) {
        if (room.date === daySelected) {
          acc.push(room.roomNumber)
        }
        return acc
      }, [])
      console.log(findBookingDates)
      return findBookingDates
    }

    function findRoomsAvailableToday() {
      let bookings = findSelectedDateForRooms();
      let roomsAvailableToday = bookings.reduce(function(acc, num) {
        console.log(num)
        roomData.forEach(function(room) {
          console.log(room)
          if (num !== room.number) {
            acc.push(room)
          }
        })
        return acc
      }, [])
      console.log(roomsAvailableToday)
      return roomsAvailableToday
    }

    // function displayName() {
    //   e.preventDefault();
    //   let currentUserName = $('#existing-customer').val()
    //   $('.find-current-user').on('click', function(e) {
    //     $('.user-name').text(currentUserName)
    //   })
    // }

    // displayName()

    $('.find-date-orders').on('click', function() {
      findSelectedDateForOrders();
    })

    $('.find-available-rooms-today').on('click', function() {
      findRoomsAvailableToday();
    })
  }, 500);
});



$('.find-current-user').on('click', function(e) {
  e.preventDefault();
  let userName = $('#existing-customer').val()
  let customerInfo = createCustomer(userName)
  $('.user-name').text(customerInfo.name)
  console.log(customerInfo)
  let userOrderHistory = customerInfo.roomService.map(function(order) {
    return (`<li> ${order.date}  :  ${order.totalCost} </li>`)
  })
  $('.user-room-service').html(userOrderHistory.join(''))
  
})

function createCustomer(userName) {
  let currentUser = userData.find(function(user) {
    return user.name === userName
  })
  let userRoomServiceData = roomServiceData.filter(function(roomService) {
    return roomService.userID === currentUser.id
  })
  let customer = new Customer(userRoomServiceData, currentUser.name, currentUser.id)
  return customer
}



// $('.find-current-user').click(function(e) {
//   e.preventDefault();
// })

$('#main').on('click', function() {
  $('.main-tab-footer').show();
})

$('#customer').on('click', function() {
  $('.main-tab-footer').hide();
})

$('#rooms').on('click', function() {
  $('.main-tab-footer').hide();
})

$('#orders').on('click', function() {
  $('.main-tab-footer').hide();
})

$('#rooms').on('click', function() {
  $('.rooms-tab-footer').show();
})

$('#main').on('click', function() {
  $('.rooms-tab-footer').hide();
})

$('#orders').on('click', function() {
  $('.rooms-tab-footer').hide();
})

$('#customer').on('click', function() {
  $('.rooms-tab-footer').hide();
})

$('#orders').on('click', function() {
  $('.orders-tab-footer').show();
})

$('#main').on('click', function() {
  $('.orders-tab-footer').hide();
})

$('#rooms').on('click', function() {
  $('.orders-tab-footer').hide();
})

$('#customer').on('click', function() {
  $('.orders-tab-footer').hide();
})

$('#customer').on('click', function() {
  $('.customers-tab-footer').show();
})

$('#main').on('click', function() {
  $('.customers-tab-footer').hide();
})

$('#rooms').on('click', function() {
  $('.customers-tab-footer').hide();
})

$('#orders').on('click', function() {
  $('.customers-tab-footer').hide();
})
