import chai from 'chai';
const expect = chai.expect;
import Orders from '../src/orders'
import roomServices from './test-data/roomService-fixtures'
describe('Orders', function() {

  let orders;
  beforeEach(() => {
    orders = new Orders(roomServices);
  });

  it('should be a function', () => {
    expect(Orders).to.be.a('function');
  });

  it('should be an instance of Main', () => {
    expect(orders).to.be.an.instanceof(Orders);
  });

  it('should store booking information', () => {
    expect(orders.roomServiceData).to.be.a('array');
  });

  it('should store todays date', () => {
    expect(orders.date).to.equal('2019/07/30');
    expect(orders.returnDateToday()).to.equal('2019/07/30');
  });

  it('should find all room service orders for todays date', () => {
    expect(orders.findAllOrdersForToday()).to.be.a('array');
  });
});