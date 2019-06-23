var app = angular.module('erp');
app.controller('task1Controller',function($scope,$rootScope, customService){
    // $rootScope.name = 'task1';
    $scope.name = 'task6';
    // customService.setValue($scope.name);
    $scope.save = function(){
        $rootScope.$broadcast('passtask1',{name : $scope.name});
    }

    $scope.price1 = 10;
    $scope.price2 = 20;
    $scope.price3 = 30;
})

app.controller('task2Controller',function($scope,$rootScope,customService){
    // $scope.name = customService.getValue();
    // $rootScope.name = 'task3';
    $rootScope.$on('passtask1',function(ev,args){
        $scope.name = args.name
    })

    $scope.showDiv = false;
    $scope.showClass = false;
    $scope.styleProp = {
        background : 'greenYellow',
        color : 'red',
        fontSize : '20px'
    }
})