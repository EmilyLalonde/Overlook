import chai from 'chai';
const expect = chai.expect;
import Bookings from '../src/bookings'
import bookings from './test-data/bookings-fixtures'
describe('Bookings', function() {

  let booking;
  beforeEach(() => {
    booking = new Bookings(bookings);
  });

  it('should be a function', () => {
    expect(Bookings).to.be.a('function');
  });

  it('should be an instance of Main', () => {
    expect(booking).to.be.an.instanceof(Bookings);
  });

  it('should store booking information', () => {
    expect(booking.bookingData).to.be.a('array');
  });

  it('should store todays date', () => {
    expect(booking.date).to.equal('2019/07/31');
    expect(booking.returnDateToday()).to.equal('2019/07/31');
  });

  it('should find the most popular booking date', () => {
    expect(booking.findMostPopularBookingDate()).to.equal('2019/07/31');
  });

  it('should find the date with most rooms available', () => {
    expect(booking.findLeastPopularBookingDate()).to.equal('2019/07/27');
  });
});