(function(){

angular.module('LunchCheck',[] )
.controller('LunchCheckController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope){

	$scope.inputText="";
	$scope.message="";


    $scope.createMessage = function(){
    	tempText = $scope.inputText.trim();
    	var counter=1;
    	if(tempText.length == 0){
            counter=0;
    	}
    	else{
    	 
    	 splittedText=tempText.split(",");
    	 counter=splittedText.length;
    	 if(splittedText[splittedText.length-1] == ""){  // I made sure that the code wont mistakenly add an another element to the counter if a closing comma is added.
    	 counter= counter -1;

    	 }
    	 console.log(splittedText);
      }
      
      if (counter == 0) $scope.message="Please enter data first!";
      else if (counter < 4) $scope.message ="Enjoy!";
      else $scope.message = "Too Much!";

    }
}




 })();