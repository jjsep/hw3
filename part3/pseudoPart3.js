/*add the undo/redo functionality for adding and removing books from the shopping cart. 

notes:

NEED:
3 ARRAYS -->


array #1: books array 
-- books is already stored as: 

                $scope.books = [
                {title: 'Absolute Java', qty: 1, price: 114.95},
                {title: 'Pro HTML5',     qty: 2, price: 27.95},
                {title: 'Head First HTML5', qty: 1, price: 27.89}
            ];

array #2: undo array 

array #3: redo array

3 FUNCTIONS  -->

function #1: cart update: 
needs to push a copy of books array ($scope.books) onto undo array 
on add or remove operation


function #2: undo function:
before undoing action - need to save the current books array 
-- see $scope.saveBook = function() from hw

needs to push a copy of the books array ($scope.books) onto redo array 
and pop top array from undo list and set to current 

function #3: redo function: 
needs to push a copy of books array ($scope.books) onto undo array
and pop top array from redo list
and set to current 




-- return this.book;

pseudocode for function 2: undo */

//need variables for undo array:

const undoArray = [];
const input = document.querySelector('input')

//
function saveUndoArray(){
    undoArray.push($scope.books)
}

OR 
$scope.saveBook = function(){
    window.localStorage.setItem("sepulveda_cart", JSON.stringify($scope.books));
}

function undoArray (){
    const lastBook = undoArray.pop[$scope.book]

//tutoring session Smartthinking: 
//1. start with undo

/* create a function: 

current array = books
item 1
item 2
item 3

add new book: 
book 1
book 2
book 3

undo array:
item 1 
item 2
item 3 <-- remove last book

undo action: sets the undo as the current state 

push array(n-1) to undo array
push array 

undo action remove array(n-1)

book 1
book 2

sets the undo as the current state

now screen renders book 1 and book 2 because of undo action



top = item 1

pop into undo

1. create a new function: 
push is an operation but you cannot push an entire array doing a deep copy: it means creating a completey different array, if you want to do a shallow copy, it is easier.

deep copy: 
newArray = JSON.parse(JSON.stringift(oldArray));

shallow copy: 
newArray = [oldArray]

what is the difference? 
In a shallow copy, the objects share the same reference. So if you update the old array, the new array will be updated as well. 

In a deep copy, the old array and the new array are two different objects. Changes made in the old array won't affect the new array and changes made in the new array won't affect the 
old array. 


Question: 
Which array should you choose? 

Answer: The deep copy because it helps the arrays stay independent of each other. 

you can Traverse an array using a loop like this: 

 //Update total price function
        $scope.$watch('books', function() {
            $scope.total = 0;
            angular.forEach($scope.books, function(value) {
                $scope.total += value.qty * value.price;
            })
        }, true);
    })

