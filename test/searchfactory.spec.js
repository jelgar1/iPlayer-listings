describe('factory: Search', function() {

  var search;

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

  beforeEach(module('IPlayerListings'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .when("GET", "https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes?page=1")
      .respond(
        { shows: shows }
      );
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('1')
    .then(function(response) {
      expect(response.data.shows).toEqual(shows);
    });
    httpBackend.flush();
  });

});
