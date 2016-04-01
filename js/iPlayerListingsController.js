iPlayerListings.controller('IPlayerListingsController', ['Search', function(Search) {

  var self = this;

  self.doSearch = function(page) {
  Search.query(page, self.searchTerm)
    .then(function(response) {
      self.searchResult = response.data.atoz_programmes;
      console.log(self.searchResult);
      self.countPages();
    });
  };

  self.countPages = function() {
    var show_count = self.searchResult.count;
    var show_per_page = self.searchResult.per_page;
    number_of_pages = (Math.round(show_count / show_per_page));
    self.pagesArray();
  };

  self.pagesArray = function() {
    self.pages_array = [];
    for (var i = 1; i <= number_of_pages; i++) {
      self.pages_array.push(i);
    }
  };

}]);
