(function () {
'use strict'

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/categories.template.html',
  controller: categoryComponentController,
  bindings: {
    categories: '<'
  }
});

categoryComponentController.$inject = ['$element'];
function categoryComponentController($element){

 var $ctrl=this;


}

})();
