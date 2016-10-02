(function(){
'use strict'

angular.module("MenuApp")
.config(RoutesConfig)

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home',{

     url:'/',
     templateUrl: 'src/home.template.html'

  })

.state('categories', {
    url:'/categories',
    templateUrl: 'src/categories.html',
    controller: "categoriesController as categories",
    resolve: {
      myData: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
      }]
    }
  });
}

})();
