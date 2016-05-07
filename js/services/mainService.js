app.factory('mainService', ['$http', function($http) {
  return $http.get('https://gist.githubusercontent.com/TTalex/f732532f61c900827078c318a1622f56/raw/f1beca357308ff41224714da280470679c64b519/sample-data.json');
}]);
