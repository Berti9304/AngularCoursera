(function(){
  'use strict'

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController)

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){

var ctrl = this;
var promise = [];

ctrl.searchTerm="";
ctrl.getList =  function(searchTerm){
  promise = MenuSearchService.getMatchedMenuItems(searchTerm);
  promise.then(function (response) {
  ctrl.found = response;

  })
  .catch(function (error) {
    console.log(error);
  })
}

ctrl.removeItem = function(index){

  ctrl.found.splice(index, 1);

}



}
})();
