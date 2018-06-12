angular.module('viewNav')
     
//***********************************************************************************************************************************************************     
    .component('rootComponent00', {
        
        templateUrl: 'components/components00_03/tmpl_00/viewTmpl_00.html',
        
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
                var vpWidth = GetSet.getViewWidth();
                
                var self00 = this; 
                
                self00.fontsize1 = "font-size:" + ((0.00235)*(vpWidth) + 0.24706) + "em";
                self00.fontsize2 = "font-size:" + ((0.00182)*(vpWidth) + 0.11647) + "em";
                self00.fontsize3 = "font-size:" + ((0.00165)*(vpWidth) + 0.07294) + "em";
                
                self00.width1 = "width:" + ((0.00353)*(vpWidth) + -1.12941) + "%";
                self00.width2 = "width:" + ((-0.00941)*(vpWidth) + 58.01176) + "%";
                self00.width3 = "width:" + ((0.00588)*(vpWidth) + -1.88235) + "%";
                // self00.width4 = "width:" +  + "%";
                
                

            compFactory.logView(00);
        }]
    })
    
//***********************************************************************************************************************************************************    
    
    .component('rootComponent01', {
        
        templateUrl: 'components/components00_03/tmpl_01/viewTmpl_01.html',
       
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var vpWidth = GetSet.getViewWidth();

            var self01 = this; 

            self01.fontsize1 = "font-size:" + ((0.00247)*(vpWidth) + 1.11111) + "em";
            self01.fontsize2 = "font-size:" + ((0.00123)*(vpWidth) + 0.80556) + "em";
            
            compFactory.logView(01);
        }]
    })
    
 //***********************************************************************************************************************************************************    
    
    .component('rootComponent02', {
        
        templateUrl: 'components/components00_03/tmpl_02/viewTmpl_02.html',

         controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var vpWidth = GetSet.getViewWidth();

            var self02 = this; 
            
            self02.fontsize1 = "font-size:" + ((0.00247)*(vpWidth) + 1.11111) + "em";
            
            compFactory.logView(02);
        }]    
    })
//***********************************************************************************************************************************************************    
    
    .component('rootComponent03', {
        
        templateUrl: 'components/components00_03/tmpl_03/viewTmpl_03.html',
       
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var vpWidth = GetSet.getViewWidth();

            var self03 = this; 
            
            self03.fontsize1 = "font-size:" + ((0.00247)*(vpWidth) + 1.11111) + "em";
            
            compFactory.logView(03);
        }]
    });
    
//***********************************************************************************************************************************************************   

    
    
  