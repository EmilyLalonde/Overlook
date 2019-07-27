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
});