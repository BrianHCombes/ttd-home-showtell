angular.module('viewNav')
        
    .component('rootComponent12', {
      
        templateUrl: 'components/components12_15/tmpl_12/viewTmpl_12.html',

        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(12);
        }]
    })
    
    .component('rootComponent13', {
        
        templateUrl: 'components/components12_15/tmpl_13/viewTmpl_13.html',
        controller: ['compFactory', function(compFactory){
               
            compFactory.logView(13);
        }]

    })
    
    .component('rootComponent14', {
        
        templateUrl: 'components/components12_15/tmpl_14/viewTmpl_14.html',

        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(14);
        }]

    })
    
    .component('rootComponent15', {
        
        templateUrl: 'components/components12_15/tmpl_15/viewTmpl_15.html',
        
        controller: ['compFactory', function(compFactory){

            compFactory.logView(15);
        }]
    });
    
