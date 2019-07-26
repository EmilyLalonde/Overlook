// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
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

// An example of how you tell webpack to use an image (also need to link to it in the index.html)


$(document).ready(function() {
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
});

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
