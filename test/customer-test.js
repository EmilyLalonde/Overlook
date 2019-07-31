import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/customer'
import users from './test-data/users-fixtures'
import roomService from './test-data/roomService-fixtures'
describe('Customer', function() {

  let customer;
  beforeEach(() => {
    customer = new Customer(users, roomService);
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Main', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should store user information', () => {
    expect(customer.userData).to.be.a('array');
  });

  it('should find the customer id', () => {
    expect(customer.findUserId(1)).to.be.a('object');
  });

  it('should find all room service history for customer', () => {
    expect(customer.findUserRoomServicePurchases(100)).to.equal();
  });
});