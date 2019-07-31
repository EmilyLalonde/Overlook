import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/customer'
import roomService from './test-data/roomService-fixtures'
import bookings from './test-data/bookings-fixtures'
describe('Customer', function() {

  let customer;
  beforeEach(() => {
    customer = new Customer(1, 'Matilde Larson', roomService, bookings);
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Main', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should hold a users id', () => {
    expect(customer.id).to.equal(1);
  });

  it('should hold a user name', () => {
    expect(customer.name).to.equal('Matilde Larson');
  });

  it('should store room service and booking information', () => {
    expect(customer.roomService).to.be.a('array');
    expect(customer.booking).to.be.a('array');
  });
});