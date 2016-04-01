describe('iPlayer Listings finder', function() {
  it('finds listings', function() {
    browser.get('http://localhost:8080');

    element(by.className('btn')).click();

    expect(element(by.binding('show.title')).getText()).
        toEqual('Abadas');
  });
});
