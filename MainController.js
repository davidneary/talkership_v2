/*global app*/

app.controller('MainController', ['$scope', 'friendData', function($scope, friendData) {
  friendData.success(function(data) {
    $scope.friendInfo = data;
  });
  
}]);