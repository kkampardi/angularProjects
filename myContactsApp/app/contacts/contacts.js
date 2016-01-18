'use strict';

angular.module('myContacts.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsController'
  });
}])

.controller('ContactsController', ['$scope', '$firebaseArray', '$http',
function($scope, $firebaseArray, $http) {
  // Init Firebase
  	var ref = new Firebase('https://mycontacts-app.firebaseio.com/contacts');
  	// get Contacts
  	$scope.contacts = $firebaseArray(ref);


    $scope.addFormShow = false;
    console.log("addFormShow:", $scope.addFormShow);
  	// Show Add Form
  	$scope.showAddForm = function(){
  		$scope.addFormShow = true;
      console.log("addFormShow:", $scope.addFormShow);
  	}

}]);
