/*global app*/

app.factory('friendData', ['$http', function($http) {
  return $http.get('<insert API get here>')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  });
         }]);