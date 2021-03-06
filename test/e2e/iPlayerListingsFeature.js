describe('iPlayer Listings finder', function() {
  beforeEach(function() {
    browser.get('http://localhost:8080');
    listings = element.all(by.repeater('show in ctrl.searchResult.elements'));
    pages = element.all(by.repeater('page in ctrl.pages_array'));
    characters = element.all(by.repeater('character in ctrl.characters'));
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('iPlayer Listings');
  });

  it('finds listings', function() {
    expect(listings.first().getText()).toEqual('Abadas');
  });

  it('finds the number of pages', function() {
    expect(pages.last().getText()).toEqual('4');
  });

  it('can click through to another page', function() {
    element(by.id('page4')).click();
    expect(listings.first().getText()).toEqual('Artsnight');
  });

  it('can click through different letters and numbers', function() {
    characters.get(1).click();
    expect(listings.first().getText()).toEqual('Babar Ahmad: The British Cyber-Jihadist');
  });

});
