var app = angular.module('erp');
app.controller('homeController',function($scope){
    $scope.name = "test";
    $scope.students = [
        {
            name : 'Dinesh20',
            age : 21
        },
        {
            name : 'Vignesh',
            age : 23
        },
        {
            name : 'Rajeev',
            age : 22
        },
        {
            name : 'Guna',
            age : 20
        }
    ];
    $scope.limit = 4;
    $scope.showDiv = true;
    $scope.changediv = function(){
        $scope.showDiv = !$scope.showDiv;
    }
})
app.controller('aboutController',function(){
    
})