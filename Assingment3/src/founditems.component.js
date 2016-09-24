(function(){

angular.module('NarrowItDownApp')
.component('foundItems',  {
  templateUrl: 'foundItems.html',
  controller: foundItemsController,
  bindings: {
    foundItems: '<',
    onRemove: '&'
  }
})

foundItemsController.$inject=['$element']
function foundItemsController($element)
{
  $ctrl= this;

  

  $ctrl.remove = function(myIndex){
    $ctrl.onRemove({index : myIndex});
  };
}

})();
