angular.module('viewNav')
    
    .component('rootComponent08', {
        
        templateUrl: 'components/components08_11/tmpl_08/viewTmpl_08.html',
       
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self08 = this; 
            
            // Response Section 1
            self08.rs1fontsize3 = "font-size:" + ((0.00272)*(viewWidth)-0.17778) + "em";    // AR_3_0.8
            self08.rs1width1 = "width:" + ((-0.01235)*(viewWidth)+64.44444) + "%";          // AR_50_60
            self08.rs1fontsize1 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em";    // AR_1.25_0.75
            self08.rs1width2 = "width:" + ((0.01235)*(viewWidth)+35.55556) + "%";           // AR_50_40
            self08.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";  // AR_10_0
            self08.rs1margintop2 = "margin-top:" + ((0.02469)*(viewWidth)-3.88889) + "px";  // AR_25_5
            self08.rs1width3 = "width:" + ((-0.01235)*(viewWidth)+99.44444) + "%";          // AR_85_95
            self08.rs1positionleft1 = "left:" + ((0.00617)*(viewWidth)+0.27778) + "%";      // AR_7.5_2.5
            
             
            
            // Response Section 2
            self08.rs2fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+0.19444) + "em";               // AR_2_0.75
            self08.rs2marginbottom1 = "margin-bottom:" + ((0.06173)*(viewWidth)+7.77778) + "px";    // AR_80_30 
            
            // Response Section 3
            self08.rs3positiontop1 = "top:" + ((-0.03086)*(viewWidth)-13.88889) + "px";        // AR_-50_-25
            self08.rs3positionleft1 = "left:" + ((0.01235)*(viewWidth)+70.55556)    + "%";     // AR_85_75
            self08.rs3width3 = "width:" + ((0.09877)*(viewWidth)+34.44444) + "px";             // AR_150_70  
            self08.fontsize4 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em"; 
            self08.rs3height1 = "height" + ((0.12963)*(viewWidth)+48.33333) + "em"; 
            
            
            // Not used
            self08.margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
            self08.positiontop2 = "top:" + ((0.43210)*(viewWidth)-5.55556) + "px";          //div4
            self08.fontsize5 = "font-size:" + ((0.00370)*(viewWidth)-0.33333) + "em";
            
             
            
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
   
  