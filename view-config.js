angular.module('viewNav', ['ui.router', 'ngSanitize'])

    .config(['$stateProvider', function($stateProvider) {
 
        //  configure states for hyper menu items
        var viewsObj = {};
        
        for(tensPlace=0; tensPlace<10; tensPlace++){
            for(onesPlace=0; onesPlace<10; onesPlace++){
                
                viewsObj = '{   "rootView":{"component":"rootComponent' + tensPlace + '' + onesPlace + '"},   "childView1@view' + tensPlace + '' + onesPlace + '":{"component":"child1"}   }';
                viewsObj = JSON.parse(viewsObj);
                
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
                    name:"ttd",
                    url:"/ttd",
                    views:{
                            "rootView":{"component":"ttd"},
                            "childView1@ttd": {"component":"child1"}
                          }
                };    
        $stateProvider.state(state);
        
        state = {
                    name:"intro",
                    url:"/intro",
                    views:{
                            "rootView":{"component":"intro"},
                            "childView1@intro": {"component":"child1"}
                          }
                };    
        $stateProvider.state(state);
        
        state = {
                    name:"buyprice",
                    url:"/buyprice",
                    views:{
                            "rootView":{"component":"buyprice"},
                            "childView1@buyprice": {"component":"child1"}
                          }
                };    
        $stateProvider.state(state);
        
        state = {
                    name:"products",
                    url:"/products",
                    views:{ 
                            "rootView":{"component":"products"},
                            "childView1@products": {"component":"child1"}
                          }
                };    
        $stateProvider.state(state);
        
        state = {
                    name:"reviews",
                    url:"/reviews",
                    views:{
                            "rootView":{"component":"reviews"},
                            "childView1@reviews": {"component":"child1"}
                          }
                };    
                // ,  "childView2@reviews": {"component":"child2"}
        $stateProvider.state(state);
        
        state = {
                    name:"policy",
                    url:"/policy",
                    views:{
                            "rootView":{"component":"policy"},
                            "childView1@policy": {"component":"child1"}
                          }
                };    
        $stateProvider.state(state);
        
        state = {
                    name:"transition",
                    url:"/transition",
                    views:{
                            "rootView":{"component":"transition"},
                            "childView1@transition": {"component":"child1"}
                          }
                };    
        $stateProvider.state(state);
    }]);

   // https://github.com/angular-ui/ui-router/wiki/Quick-Reference#stateconfig     
   // C:\School\SelfEd\API-UI-Router.docx
   
      
    