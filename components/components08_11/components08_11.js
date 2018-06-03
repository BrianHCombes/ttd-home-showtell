angular.module('viewNav')
    
    .component('rootComponent08', {
        
        templateUrl: 'components/components08_11/tmpl_08/viewTmpl_08.html',
       
        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(08);
        }]
    })
    
//***********************************************************************************************************************************************************     
    
    .component('rootComponent09', {
        
        templateUrl: 'components/components08_11/tmpl_09/viewTmpl_09.html',
       
        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(09);
        }]
    })
    
//***********************************************************************************************************************************************************   

    .component('rootComponent10', {
        
        templateUrl: 'components/components08_11/tmpl_10/viewTmpl_10.html',
       
        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(10);
        }]
    })
    
//***********************************************************************************************************************************************************   

    .component('rootComponent11', {
        
        templateUrl: 'components/components08_11/tmpl_11/viewTmpl_11.html',
       
        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(11);
        }]
    })
    
//***********************************************************************************************************************************************************   
   
  