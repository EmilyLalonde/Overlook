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
    expect(booking.date).to.equal('2019/07/28');
    expect(booking.returnDateToday()).to.equal('2019/07/28');
  });
});