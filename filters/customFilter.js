var app = angular.module('erp');
app.filter('convertDollar',function($rootScope){
    $rootScope.location = 'US'
    return function(item){
        if($rootScope.location == 'Europe'){
            return item * 50;
        }
        else if($rootScope.location == 'US'){
            return item * 70;
        }
        else{
            return item;
        }
        
    }
})

app.filter('toUpperCase',function(){
    return function(item){
        if(!item){
            return item;
        }
        return item.toLowerCase() + "hi";
    }
})