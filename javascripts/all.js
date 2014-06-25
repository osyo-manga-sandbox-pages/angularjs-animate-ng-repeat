var AnimateDemoCtrl = function ($scope) {

	$scope.months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]

	$scope.click = function (){
		$scope.list = []
		for(var i=0 ; i < 10 ; i++){
			if( Math.floor(Math.random() * 10 % 2) == 0){
// 				$scope.list.push(i);
				$scope.list.push(i + 1 + ". " + $scope.months[i]);
			}
		}
		console.log($scope.list);
	}
	$scope.click();

};
