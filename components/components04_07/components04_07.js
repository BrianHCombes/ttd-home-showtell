angular.module('viewNav')
    
    .component('rootComponent04', {
        
        templateUrl: 'components/components04_07/tmpl_04/viewTmpl_04.html',
       
         controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var vpWidth = GetSet.getViewWidth();

            var self04 = this; 
            
            self04.fontsize1 = "font-size:" + ((0.00247)*(vpWidth) + 1.11111) + "em";
            self04.fontsize2 = "font-size:" + ((0.00160)*(vpWidth) + 0.12222) + "em";
            
            
            
            compFactory.logView(04);
        }]
    })
    
//***********************************************************************************************************************************************************     
    
    .component('rootComponent05', {
        
        templateUrl: 'components/components04_07/tmpl_05/viewTmpl_05.html',
       
        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(05);
        }]
    })
    
//***********************************************************************************************************************************************************    
    
    .component('rootComponent06', {
        
        templateUrl: 'components/components04_07/tmpl_06/viewTmpl_06.html',
       
        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(06);
        }]
    })
    
//***********************************************************************************************************************************************************   

     .component('rootComponent07', {
        
        templateUrl: 'components/components04_07/tmpl_07/viewTmpl_07.html',
       
        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(07);
        }]
    });
    
//***********************************************************************************************************************************************************   
  