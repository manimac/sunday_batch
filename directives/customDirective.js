var app = angular.module('erp');
app.directive('document',function(){
    return {
        restrict :'C',
        templateUrl : 'views/directive.html'
    }
})