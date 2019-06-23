var app = angular.module('erp');
app.service('customService',function(){
    return{
        getParam  :getName,
        setValue : setValue,
        getValue : getValue
    }

    function getName(){
        return "Service call";
    }

    function setValue(param){
        this.name = param;
    }

    function getValue(){
        return this.name;
    }

})