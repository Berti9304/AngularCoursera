(function(){
'use strict'

angular.module('MenuApp')
.controller('itemsController',itemsController);

itemsController.$inject = ['items'];
function itemsController(items){
  var itemsctrl = this;
  itemsctrl.items =  items.data;
 console.log(items.items);
}

})();
