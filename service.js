var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {
  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response) {
      var parsedResponse = response.data.data
      for(var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Ralf'
      }
      deferred.resolve(parsedResponse)
    })
    return deferred.promise;
  }
});

// To write a native promise...
// return $q(function(resolve, reject)){
//   $http({
//         method: 'GET',
//         url: 'http://reqr.es/api/users?page=1'
// })
// .then(function(response){
//   var theActualArrayOfUsers = response.data.data
//   resolve(theActualArrayOfUsers)
// }, reject)
// })
// return mynativePromise

// A simplified version of the code above...
// return $http.get('http://reqr.es/api/users?page=1')
//   .then(function(){
//     return response.data.data
//   })

