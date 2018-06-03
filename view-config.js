angular.module('viewNav', ['ui.router', 'ngSanitize'])

    .config(['$stateProvider', function($stateProvider) {
 
        //  configure states for hyper menu items
        var viewsObj = { rootView: {component:""}};
        for(tensPlace=0; tensPlace<10; tensPlace++){
            for(onesPlace=0; onesPlace<10; onesPlace++){
                viewsObj.rootView.component = "rootComponent".concat(tensPlace).concat(onesPlace);
                var state = {
                                name:"view".concat(tensPlace).concat(onesPlace),
                                url:"/view".concat(tensPlace).concat(onesPlace),
                                views:viewsObj
                };
                $stateProvider.state(state);
                
                if((tensPlace*10)+onesPlace === 47){break;}
            }
            if((tensPlace*10)+onesPlace === 47){break;}
        };
        
        // configure states for top menu items
        state = {
                    name:"howto",
                    url:"/howto",
                    views:{"rootView":{"component":"howto"}}
                };    
        $stateProvider.state(state);
        
        state = {
                    name:"buyprice",
                    url:"/buyprice",
                    views:{"rootView":{"component":"buyprice"}}
                };    
        $stateProvider.state(state);
        
        state = {
                    name:"products",
                    url:"/products",
                    views:{"rootView":{"component":"products"}}
                };    
        $stateProvider.state(state);
        
        state = {
                    name:"reviews",
                    url:"/reviews",
                    views:{"rootView":{"component":"reviews"}}
                };    
        $stateProvider.state(state);
        
        state = {
                    name:"policy",
                    url:"/policy",
                    views:{"rootView":{"component":"policy"}}
                };    
        $stateProvider.state(state);
            
    }]);

   // https://github.com/angular-ui/ui-router/wiki/Quick-Reference#stateconfig     
   // C:\School\SelfEd\API-UI-Router.docx
   
      
    