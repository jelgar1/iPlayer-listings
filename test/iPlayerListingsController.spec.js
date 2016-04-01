describe('IPlayerListingsController', function() {
  beforeEach(module('IPlayerListings'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('IPlayerListingsController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {

    var httpBackend;

    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
        httpBackend
        .expectGET("https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes?page=1")
        .respond(
            { shows: shows }
          );
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
     });

  var shows = [
    {
      "title": "Eastenders",
      "picture_url": "http://www.gstatic.com/tv/thumb/tvbanners/372238/p372238_b_v8_aa.jpg",

    },
    {
      "title": "The Night Manager",
      "picture_url": "http://www.gstatic.com/tv/thumb/tvbanners/12501595/p12501595_b_v8_ac.jpg",
    }
  ];

    it('displays search results', function() {
      ctrl.searchTerm = '1';
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult.shows).toEqual(shows);
    });

    // it('calculates the number of pages to display', function() {
    //   ctrl.searchTerm = '1';
    //   ctrl.doSearch();
    //   httpBackend.flush();
    //   expect(ctrl.countPages()).toEqual(4);
    // });
  });
});
