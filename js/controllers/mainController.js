app.controller('mainController', ['$scope', 'mainService', '$routeParams', function($scope, mainService, $routeParams) {
  var positionmap = [ [ 467, 367 ], [ 626, 401 ], [ 616, 323 ], [ 610, 160 ], [ 443, 173 ], [ 351, 67 ], [ 272, 173 ], [ 90, 114 ], [ 90, 114 ], [ 84, 253 ], [ 94, 412 ], [ 303, 323 ], [ 388, 374 ] ];
  mainService.success(function(data) {
    // data is shaped like data = { data: [1, 2] }
    var i, points = [];
    for (i = 0; i < data.data.length; i = i + 1) {
        points.push(positionmap[data.data[i] - 1]);
    }
    $scope.data = points;
  });
}]);