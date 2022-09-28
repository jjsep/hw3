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
        //add a function to track added and deleted books
        $scope.recentAddition = []; //storing however many times we just added a book
        $scope.recentUndo = []; //storing all last undo into an array

          //Remove function
         $scope.removeBook = function(index) {
            $scope.books.splice(index, 1);
         }

        //Add function
        $scope.addBook = function() {
        $scope.recentAddition.push({title: 'New Book', qty: 1, price: 10.99}); //recently added book
        $scope.books.push({title: 'New Book', qty: 1, price: 10.99});
      }

        //Save to localStorage function
        $scope.saveBook = function() {
            window.localStorage.setItem("sepulveda_cart", JSON.stringify($scope.books));
        }

        //new function - undo
        $scope.undoBook = function (){
            if ($scope.recentAddition.length){
                $scope.recentUndo.push($scope.books[$scope.books.length - 1])
                $scope.books.pop()
                $scope.recentAddition.pop()
            }
        }

        //new function - redo 
        $scope.redoBook = function(){
            if ($scope.recentUndo.length){
                $scope.books.push($scope.recentUndo[$scope.recentUndo.length -1])
                // $scope.recentAddition.push($scope.recentUndo[$scope.recentUndo.length -1])  //if i want to redo and undo and redo 
                $scope.recentUndo.pop()
            }
        }

        //Update total price function
        $scope.$watch('books', function() {
            $scope.total = 0;
            angular.forEach($scope.books, function(value) {
                $scope.total += value.qty * value.price;
            })
        }, true);
    })
