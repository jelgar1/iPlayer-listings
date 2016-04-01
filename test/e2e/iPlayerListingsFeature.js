describe('iPlayer Listings finder', function() {
  beforeEach(function() {
    browser.get('http://localhost:8080');
    listings = element.all(by.repeater('show in ctrl.searchResult.atoz_programmes.elements'));
    pages = element.all(by.repeater('page in ctrl.pages'));
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('iPlayer Listings');
  });

  it('finds listings', function() {
    element(by.className('btn')).click();
    expect(listings.first().getText()).toEqual('Abadas');
  });

  it('finds the number of pages', function() {
    expect(listings.last().getText()).toEqual('4');
  });

});
