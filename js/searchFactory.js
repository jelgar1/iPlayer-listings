iPlayerListings.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes';
  return {
    query: function(page, searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'page': page
        }
      });
    }
  };
}]);
