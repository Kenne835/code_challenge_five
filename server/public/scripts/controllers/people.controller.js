myApp.controller('PeopleController', ['$http', function($http) {
    var vm = this;
    vm.newPerson = {};

    // get the people data from the server and fill the DOM
    getPeople();

    vm.addPerson = function() {
      console.log('add person', vm.newPerson);
      $http.post('/person', vm.newPerson)
        .then(function(response) {
          console.log('added person', response);
          getPeople();
        });
    }

    function getPeople() {
      $http.get('/person').then(function(response) {
        console.log(response.data);
        vm.people = response.data;
      });
    }



}]);
