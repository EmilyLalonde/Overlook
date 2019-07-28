import chai from 'chai';
const expect = chai.expect;
import Main from '../src/main'
import rooms from './test-data/rooms-fixtures'
import roomServices from './test-data/roomService-fixtures'
import bookings from './test-data/bookings-fixtures'
describe('Main', function() {

  let main;
  beforeEach(() => {
    main = new Main(rooms, roomServices, bookings);
  });

  it('should be a function', () => {
    expect(Main).to.be.a('function');
  });

  it('should be an instance of Main', () => {
    expect(main).to.be.an.instanceof(Main);
  });

  it('should store todays date', () => {
    expect(main.date).to.equal('2019/07/28');
    expect(main.returnDateToday()).to.equal('2019/07/28');
  });

  it('should store room, room service, and booking information', () => {
    expect(main.roomData).to.be.a('array');
    expect(main.roomServiceData).to.be.a('array');
    expect(main.bookingData).to.be.a('array');
  });

  it('should find the bookings for todays date', () => {
    expect(main.findRoomsAvailableToday()).to.be.a('number');
  });

  // it('should find the total revenue for today', () => {
  //   expect(main.findTotalRevenueForToday()).to.equal();
  // });

  it('should find the percentage of rooms booked for the day', () => {
    expect(main.percentageOfRoomsBookedToday()).to.be.a('number');
  });
});