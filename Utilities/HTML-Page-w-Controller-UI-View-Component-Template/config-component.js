var configApp = angular.module('ControllerTemplate', ['ui.router'])

    configApp.config(['$stateProvider', function($stateProvider) {
            
        var state = {
                        name:"myView",
                        url: "/myView",
                        component: "mycomponent"
                    };
                    
        $stateProvider.state(state);    
                       
    }]);


    configApp.component('mycomponent', {
            
            
            //templateUrl:"html-template.html",
            templateUrl:"../../components/top_menu/intro/intro.html",
            
            controller: [function(){
                var thisCtrl = this;
                thisCtrl.componentVar = "This text is from component Controller but being displayed in html template file";
                
            }] 
            
            
                    
            
        
       });