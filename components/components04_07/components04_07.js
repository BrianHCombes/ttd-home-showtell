angular.module('viewNav')
    
    .component('rootComponent04', {
        
        templateUrl: 'components/components04_07/tmpl_04/viewTmpl_04.html',
       
         controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self04 = this; 
            
            // AR Response Section 1 
            self04.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";  // AR_10_0
            self04.rs1margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";  // AR_15_5
            
            
            // AR Response Section 2
            self04.rs2fontsize2 = "font-size:" + ((0.00265)*(viewWidth)-0.10556) + "em";    //AR_3_0.85
            
            
            // AR Response Section 3
            self04.rs3positiontop1 = "top:" + ((0.09259)*(viewWidth)-8.33333) + "px";       // AR_100_25
            self04.rs3positionleft1 = "left:" + ((0.01235)*(viewWidth)+65.55556) + "%";     // AR_70_35
            self04.rs3width3 = "width:" + ((0.09877)*(viewWidth)+34.44444) + "px";          // AR_150_70         
            self04.rs3positiontop2 = "top:" + ((0.38272)*(viewWidth)+2.22222) + "px";       // AR_450_140      
            self04.rs3fontsize5 = "font-size:" + ((0.00370)*(viewWidth)-0.33333) + "em";    // AR_4_1
            
            compFactory.logView(04);
        }]
    })
    
//***********************************************************************************************************************************************************     
    
    .component('rootComponent05', {
        
        templateUrl: 'components/components04_07/tmpl_05/viewTmpl_05.html',
       
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self05 = this; 
            
            self05.width3 = "width:" + ((0.02963)*(viewWidth)+15.33333) + "px";
             
            self05.margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            self05.margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
            
            self05.positiontop1 = "top:" + ((0.04938)*(viewWidth)+2.22222) + "px";
            self05.positiontop2 = "top:" + ((0.43210)*(viewWidth)-5.55556) + "px";          //div4

            self05.fontsize1 = "font-size:" + ((0.00241)*(viewWidth)-0.06667) + "em";
            self05.fontsize2 = "font-size:" + ((0.00265)*(viewWidth)-0.10556) + "em";
            self05.fontsize4 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em";
            self05.fontsize5 = "font-size:" + ((0.00370)*(viewWidth)-0.33333) + "em";
            
            self05.positionleft1 = "left:" + ((0.02840)*(viewWidth)+46.77778)    + "%";
            
            //self05.padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.02099)*(viewWidth)+0.44444) + "px";
            
            compFactory.logView(05);
        }]
    })
    
//***********************************************************************************************************************************************************    
    
    .component('rootComponent06', {
        
        templateUrl: 'components/components04_07/tmpl_06/viewTmpl_06.html',
       
         controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self06 = this; 
            
            self06.width1 = "width:" + ((-0.01235)*(viewWidth)+64.44444) + "%";
            self06.width2 = "width:" + ((0.01235)*(viewWidth)+35.55556) + "%";
            self06.width3 = "width:" + ((0.02963)*(viewWidth)+15.33333) + "px";
             
            self06.margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            self06.margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
            
            self06.positiontop1 = "top:" + ((0.04938)*(viewWidth)-7.77778) + "px";
            self06.positiontop2 = "top:" + ((0.43210)*(viewWidth)-5.55556) + "px";          //div4

            self06.fontsize1 = "font-size:" + ((0.00062)*(viewWidth)+0.52778) + "em";
            self06.fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+0.19444) + "em";
            self06.fontsize3 = "font-size:" + ((0.00272)*(viewWidth)-0.17778) + "em";
            
            
            self06.fontsize4 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em";
            self06.fontsize5 = "font-size:" + ((0.00370)*(viewWidth)-0.33333) + "em";
            
            self06.positionleft1 = "left:" + ((0.02469)*(viewWidth)+51.11111)    + "%";
            
            compFactory.logView(06);
        }]
    })
    
//***********************************************************************************************************************************************************   

     .component('rootComponent07', {
        
        templateUrl: 'components/components04_07/tmpl_07/viewTmpl_07.html',
       
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self07 = this; 
            
            self07.width1 = "width:" + ((-0.01235)*(viewWidth)+64.44444) + "%";
            self07.width2 = "width:" + ((0.01235)*(viewWidth)+35.55556) + "%";
            self07.width3 = "width:" + ((0.02963)*(viewWidth)+15.33333) + "px";
             
            self07.margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            self07.margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
            
            self07.positiontop1 = "top:" + ((0.04938)*(viewWidth)-7.77778) + "px";
            self07.positiontop2 = "top:" + ((0.43210)*(viewWidth)-5.55556) + "px";          //div4

            self07.fontsize1 = "font-size:" + ((0.00062)*(viewWidth)+0.52778) + "em";
            self07.fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+0.19444) + "em";
            self07.fontsize3 = "font-size:" + ((0.00272)*(viewWidth)-0.17778) + "em";
            
            
            self07.fontsize4 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em";
            self07.fontsize5 = "font-size:" + ((0.00370)*(viewWidth)-0.33333) + "em";
            
            self07.positionleft1 = "left:" + ((0.02469)*(viewWidth)+51.11111)    + "%";    
                
            
            compFactory.logView(07);
        }]
    });
    
//***********************************************************************************************************************************************************   
  