angular.module('viewNav')
     
//***********************************************************************************************************************************************************     
    .component('rootComponent00', {
        
        templateUrl: 'components/components00_03/tmpl_00/viewTmpl_00.html',
        
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self00 = this; 

            // Response Section 1
            self00.rs1fontsize1 = "font-size:" + ((0.00235)*(viewWidth) + 0.24706) + "em";

            // Response Section 2
            self00.rs2margintop1 = "margin-top:" + ((0.03086)*(viewWidth)-11.11111) + "px";
            self00.rs2marginbottom1 = "margin-bottom:" + ((0.03704)*(viewWidth)-13.33333) + "px";
            
            self00.rs2width1 = "width:" + ((0.00353)*(viewWidth) + -1.12941) + "%";
            self00.rs2width2 = "width:" + ((-0.00941)*(viewWidth) + 58.01176) + "%";
            self00.rs2fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+0.19444) + "em";
            self00.rs2fontsize3 = "font-size:" + ((0.00165)*(viewWidth) + 0.07294) + "em";
            
            // Response Section 3
            self00.rs3positiontop1 = "top:" + ((0.03704)*(viewWidth)+6.66667) + "px";
            self00.rs3positionleft1 = "left:" + ((0.01235)*(viewWidth)+65.55556) + "%";
            self00.rs3width1 = "width:" + ((0.09877)*(viewWidth)+34.44444) + "px";
            
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
            var viewWidth = GetSet.getViewWidth();

            var self03 = this; 
            
            self03.width3 = "width:" + ((0.02963)*(viewWidth)+15.33333) + "px";
             
            self03.margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            self03.margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
            
            self03.positiontop1 = "top:" + ((0.04938)*(viewWidth)+2.22222) + "px";
            

            self03.fontsize1 = "font-size:" + ((0.00241)*(viewWidth)-0.06667) + "em";
            self03.fontsize2 = "font-size:" + ((0.00265)*(viewWidth)-0.10556) + "em";
            self03.fontsize4 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em";
            
            self03.positionleft1 = "left:" + ((0.04321)*(viewWidth)+19.44444) + "%";
          
            self03.padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.02099)*(viewWidth)+0.44444) + "px";
            
            compFactory.logView(03);
        }]
    });
    
//***********************************************************************************************************************************************************   

    
    
  