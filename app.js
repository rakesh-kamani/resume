angular.module('OR', ['ngMaterial','ui.router']);

angular.module('OR').config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/profile');
    $stateProvider.state({
        name: 'app',
        abstract: true,
        templateUrl: 'VC/layout/layout.html',
        controller: 'LayoutController as vm'
    });
    $stateProvider.state({
        name: 'app.profile',
        url: '/profile',
        templateUrl: 'VC/home/home.html',
        controller: 'HomeController as vm'
    });

    $stateProvider.state({
        name: 'app.experience',
        url: '/experience',
        templateUrl: 'VC/experience/experience.html',
        controller: 'ExpController as vm'
        
    });

    $stateProvider.state({
        name: 'app.projects',
        url: '/projects',
        templateUrl: 'VC/projects/projects.html',
        controller: 'ProjectController as vm'        
    });
    $stateProvider.state({
        name: 'app.education',
        url: '/education',
        templateUrl: 'VC/education/education.html',
        controller: 'EduController as vm'
        
    });  
}]);



