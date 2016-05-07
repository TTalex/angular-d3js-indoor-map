app.controller('calibrationController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.result = [];
  $scope.cali_value = -1;
  $scope.calibrate = "Start calibration";
  $scope.toggleCalibrate = function () {
    if ($scope.calibrate === "Start calibration") {
        $scope.calibrate = "Stop calibration";
        $scope.cali_value = 0;
    } else {
        $scope.calibrate = "Start calibration";
        $scope.cali_value = -1;
    }
  }
  $scope.input = function (event) {
    if ($scope.cali_value !== -1){
        $scope.result[$scope.cali_value] = [event.pageX - event.originalTarget.offsetLeft, 
                                            event.pageY - event.originalTarget.offsetTop];
        $scope.cali_value += 1;
    }
  }
}]);