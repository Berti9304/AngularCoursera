(function () {
'use strict';

angular.module('MenuApp')
.component('itemComponent', {
  templateUrl: 'src/items.template.html',
  controller: itemCompController,
  bindings: {
    items: '<'
  }
});

itemCompController.$inject = ['$element'];
function itemCompController($element){
 var $ctrl = this;

}
})();
