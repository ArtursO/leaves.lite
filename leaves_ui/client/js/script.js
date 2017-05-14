var app  = angular.module('leavesNext', ['ui.router','ngSanitize'])

app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})

	.state('home.single_leaves', {
		url: '/leaf/:id',
		templateUrl: 'views/single-leaves.html',
		controller: 'singleLeaves'
	})

	$urlRouterProvider.otherwise('/home');
})

app.directive('leavesNav', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/navbar.html'
	}
})

app.directive('leavesCard', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/leaves-card.html',
		scope: {
			data: '='
		},
		link: function($scope, element, attrs) {
		    $scope.added_date = function(tm) {
		      return moment(tm).startOf('hour').fromNow();
		    }
		}
	}
})