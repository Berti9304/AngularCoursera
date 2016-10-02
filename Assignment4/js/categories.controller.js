(function(){
  'use strict'

 angular.module('MenuApp')
 .controller("categoriesController", categoriesController)

categoriesController.$inject = ['myData'];
function categoriesController(myData){
  var categories = this;
  categories.myData = myData;
}

})();
