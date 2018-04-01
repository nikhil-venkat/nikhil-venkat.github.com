const Blogsite = require('../../Blogsite');

describe('Blogsite', function(){
  test('render function', () => {
    expect(typeof Blogsite.render).toBe('function');
  });
});
