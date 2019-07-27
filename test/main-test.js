import chai from 'chai';
const expect = chai.expect;
import Main from './main.js'
describe('Main', function() {

  let main;
  beforeEach(() => {
    main = new Main(roomData, roomServiceData, bookingData);
  });

  it('should be a function', () => {
    expect(Main).to.be.a('function');
  });

  it('should be an instance of Main', () => {
    expect(main).to.be.an.instanceof(Main);
  });
});