iPlayerListings.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://ibl.api.bbci.co.uk//ibl/v1/atoz/';
  return {
    query: function(search_term, page) {
      return $http({
        url: queryUrl + search_term + '/programmes',
        method: 'GET',
        params: {
          'page': page
        }
      });
    }
  };
}]);
