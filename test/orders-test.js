import chai from 'chai';
const expect = chai.expect;
import Orders from '../src/orders'
import users from './test-data/users-fixtures'
import rooms from './test-data/rooms-fixtures'
import roomServices from './test-data/roomService-fixtures'
import bookings from './test-data/bookings-fixtures'
describe('Orders', function() {

  let orders;
  beforeEach(() => {
    orders = new Orders(rooms, roomServices, bookings);
  });

  it('should be a function', () => {
    expect(Orders).to.be.a('function');
  });

  it('should be an instance of Main', () => {
    expect(orders).to.be.an.instanceof(Orders);
  });

  it('should store todays date', () => {
    expect(orders.date).to.equal('2019/07/28');
    expect(orders.returnDateToday()).to.equal('2019/07/28');
  });
});