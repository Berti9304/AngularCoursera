(function(){
  'use strict'

angular.module('ShoppingListCheckoff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckoffService', ShoppingListCheckoffService);

ToBuyShoppingController.$inject= ['ShoppingListCheckoffService'];
function ToBuyShoppingController(ShoppingListCheckoffService){
    var toBuy = this;

    toBuy.list = ShoppingListCheckoffService.getToBuyArray();

    toBuy.bought = function(index){
      ShoppingListCheckoffService.bought(index)
    }

}

AlreadyBoughtShoppingController.$inject=['ShoppingListCheckoffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckoffService){
    var alreadyBought = this;

    alreadyBought.list= ShoppingListCheckoffService.getBoughtArray();



}

function ShoppingListCheckoffService(){

  var service = this;
  var toBuyArray = [{name:'Cookies' , quantity:5}, {name:'Toilet Paper', quantity:6 }, {name:'Shoes', quantity: 2},{name:'PlayStation', quantity: 1}, {name:'Chicken', quantity:1}];
  var boughtArray = [];

  service.bought = function(index){
    boughtArray.push(toBuyArray[index]);
    toBuyArray.splice(index, 1);
  }

  service.getToBuyArray = function(){
    return toBuyArray;
  }

  service.getBoughtArray = function(){
    return boughtArray;
  }


}


})();
