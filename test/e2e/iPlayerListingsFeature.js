describe('iPlayer Listings finder', function() {
  beforeEach(function() {
    browser.get('http://localhost:8080');
    listings = element.all(by.repeater('show in ctrl.searchResult.elements'));
    pages = element.all(by.repeater('page in ctrl.pages_array'));
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('iPlayer Listings');
  });

  it('finds listings', function() {
    element(by.className('btn')).click();
    expect(listings.first().getText()).toEqual('Abadas');
  });

  it('finds the number of pages', function() {
    element(by.className('btn')).click();
    expect(pages.last().getText()).toEqual('4');
  });

  it('can click through to another page', function() {
    element(by.className('btn')).click();
    element(by.id('page4')).click();
    expect(listings.first().getText()).toEqual('The Arts Show');
  });

});
