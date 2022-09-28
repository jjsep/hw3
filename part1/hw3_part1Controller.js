angular.module("myApp", [])
    .controller("CartControler", function($scope) {

        //Check whether there exists localStorage data
        var key = JSON.parse(window.localStorage.getItem("sepulveda_cart"));
        if (key == "" || key == null) {
            //Set default books data
            $scope.books = [
                {title: 'Absolute Java', qty: 1, price: 114.95},
                {title: 'Pro HTML5',     qty: 2, price: 27.95},
                {title: 'Head First HTML5', qty: 1, price: 27.89}
            ];

        } else {
            //Assign data from localStorage to books
            $scope.books = key;
        }
        
        //Remove function
         $scope.removeBook = function(index) {
            $scope.books.splice(index, 1);
         }

        //Add function
        $scope.addBook = function() {
        $scope.books.splice($scope.books.length, 0,
            {title: 'New Book', qty: 1, price: 10.99});
    }

        //Save to localStorage function
        $scope.saveBook = function() {
            window.localStorage.setItem("sepulveda_cart", JSON.stringify($scope.books));
        }


        //Update total price function
        $scope.$watch('books', function() {
            $scope.total = 0;
            angular.forEach($scope.books, function(value) {
                $scope.total += value.qty * value.price;
            })
        }, true);
    })
