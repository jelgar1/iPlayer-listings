iPlayerListings.controller('IPlayerListingsController', ['Search', function(Search) {

  var self = this;

  self.doSearch = function() {
  Search.query(self.searchTerm)
    .then(function(response) {
      self.searchResult = response.data;
      console.log(self.searchResult);
    });
  };

  self.countPages = function() {
    var show_count = self.searchResult.atoz_programmes.count;
    var show_per_page = self.searchResult.atoz_programmes.per_page;
    return Math.round(show_count / show_per_page);
  };

}]);
