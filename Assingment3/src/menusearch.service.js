(function(){

angular.module('NarrowItDownApp')
.service('MenuSearchService', MenuSearchService)
.constant('BasePath', 'https://davids-restaurant.herokuapp.com/menu_items.json')

MenuSearchService.$inject = ['$http','BasePath'];
function MenuSearchService($http,BasePath){
  var service = this;
  service.getMatchedMenuItems = function(searchTerm){

    return $http({
      method: "GET",
      url: (BasePath),
      params: {
        description: searchTerm
      }
    }).then(function (result) {
    // process result and only keep items that match
    var foundItems = [];
    for(var i=0; i<result.data.menu_items.length; i++){
      if (searchTerm == ""){

      }

      else if(result.data.menu_items[i].description.includes(searchTerm))
      {
        foundItems.push(result.data.menu_items[i]);
      }

    }

    // return processed item

    return foundItems;
                            });



  }


}

})();
