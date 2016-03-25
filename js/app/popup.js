myApp.controller("PageController", function ($scope, $http) {


    $http.get('http://www.coffeemate.club/api/coffees').success(function (data) {
        $scope.coffees = data;

        for (i = 0; i < $scope.coffees.length; i++) {
            if ($scope.coffees[i].title.length > 32) {
                $scope.coffees[i].title = $scope.coffees[i].title.slice(0,32);
            }

            $scope.coffees[i].title = $scope.coffees[i].title.toUpperCase();
        }

    });

});



