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
            var viewWidth = GetSet.getViewWidth();

            var self01 = this; 
            
            self01.width1 = "width:" + ((-0.01235)*(viewWidth)+49.44444) + "%";
            self01.width2 = "width:" + ((0.01235)*(viewWidth)+50.55556) + "%";
            
            self01.margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            self01.margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
            

            self01.fontsize1 = "font-size:" + ((0.00206)*(viewWidth)+0.59118) + "em";
            self01.fontsize2 = "font-size:" + ((0.00247)*(viewWidth)+0.11111) + "em";
            self01.fontsize3 = "font-size:" + ((0.00093)*(viewWidth)+0.41667) + "em";
            
          
            self01.padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.02099)*(viewWidth)+0.44444) + "px";
          
            
            compFactory.logView(01);
        }]
    })
    
 //***********************************************************************************************************************************************************    
    
    .component('rootComponent02', {
        
        templateUrl: 'components/components00_03/tmpl_02/viewTmpl_02.html',

         controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self02 = this; 
            
            self02.width1 = "width:" + ((-0.00617)*(viewWidth)+57.22222) + "%";
            self02.width2 = "width:" + ((0.00617)*(viewWidth)+42.77778) + "%";
            self02.width3 = "width:" + ((0.02963)*(viewWidth)+15.33333) + "px";
             
            self02.margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            self02.margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
            
            self02.positiontop = "top:" + ((0.05556)*(viewWidth)-15.00000) + "px";
            

            self02.fontsize1 = "font-size:" + ((0.00142)*(viewWidth)+0.33889) + "em";
            self02.fontsize2 = "font-size:" + ((0.00247)*(viewWidth)+0.11111) + "em";
            self02.fontsize3 = "font-size:" + ((0.00093)*(viewWidth)+0.41667) + "em";
            self02.fontsize4 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em";
            
          
            self02.padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.02099)*(viewWidth)+0.44444) + "px";
            
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

    
    
  