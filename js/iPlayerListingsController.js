iPlayerListings.controller('IPlayerListingsController', ['Search', function(Search) {

  var self = this;

  self.characters = ('a b c d e f g h i j k l m n o p q r s t u v w x y z 0-9'.split(" "));
  self.current_character = 'a';

  self.doSearch = function(search_term, page) {
  Search.query(search_term, page)
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

  self.setCurrentCharacter = function(character) {
    self.current_character = character;
  };

  self.image_url = function(image) {
    return image.replace("{recipe}", "406x228")
  }

}]);
