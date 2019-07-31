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
    expect(main.date).to.equal('2019/07/31');
    expect(main.returnDateToday()).to.equal('2019/07/31');
  });

  it('should store room, room service, and booking information', () => {
    expect(main.roomData).to.be.a('array');
    expect(main.roomServiceData).to.be.a('array');
    expect(main.bookingData).to.be.a('array');
  });

  it('should find the number of rooms available for todays date', () => {
    expect(main.findRoomsAvailableToday()).to.equal(48);
  });

  it('should find the booked rooms for today', () => {
    expect(main.findBookedRoomsToday()).to.deep.eql([28, 20])
  });

  it('should find the available rooms for today', () => {
    expect(main.findAvalilibility()).to.be.a('array');
  });

  it('should find the total room revenue for today', () => {
    expect(main.findTotalRoomRevenueToday()).to.equal(215.76);
  });

  it('should find the total orders revenue for today', () => {
    expect(main.findTotalOrdersRevenueToday()).to.equal(9.28);
  });

  it('should find the total revenue for today', () => {
    expect(main.findTotalRevenueForToday()).to.equal('225.04');
  });

  it('should find the percentage of rooms booked for the day', () => {
    expect(main.percentageOfRoomsBookedToday()).to.be.a('number');
  });
});