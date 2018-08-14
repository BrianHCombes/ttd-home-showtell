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
            self04.rs3fontsize1 = "font-size:" + ((0.00095)*(viewWidth)+0.38778) + "em";        /* AR_1.50_0.73 */
            self04.rs3top1 = "top:" + ((0.01852)*(viewWidth)+8.33333) + "px";                   /* AR_30.00_15.00 */      
            self04.rs3marginleft1= "margin-left:" + ((0.01852)*(viewWidth)-1.66667) + "px";     /* AR_20.00_5.00 */
            self04.rs3padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.01235)*(viewWidth)+5.55556) + "px";    /* AR_10.00_5.00 */ /* AR_20.01_10.00 */
            
            // Sets mode of the "NAVIGATE" button
            self04.display2 = false;
            self04.morelessText2 = "NAVIGATE";
            self04.moreless2 = function(){
                if(self04.morelessText2 === "NAVIGATE"){
                    self04.morelessText2 = "HIDE NAVIGATE";
                    self04.display2 = true;
                } 
                else {
                    self04.morelessText2 = "NAVIGATE";
                    self04.display2 = false;
                }
            };
                 
            self04.rs3positiontop2 = "top:" + ((0.38272)*(viewWidth)+2.22222) + "px";       /* AR_450_140   */      
            self04.rs3fontsize5 = "font-size:" + ((0.00162)*(viewWidth)+0.76511) + "em";    /* AR_2.66_1.35 */ /*relative to rs3fontsize1 */
            
            compFactory.logView(04);
        }]
    })
    
//***********************************************************************************************************************************************************     
    
    .component('rootComponent05', {
        
        templateUrl: 'components/components04_07/tmpl_05/viewTmpl_05.html',
       
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self05 = this; 
            
            // AR Response Section 1 
            self05.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            self05.rs1margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
            self05.rs1fontsize1 = "font-size:" + ((0.00241)*(viewWidth)-0.06667) + "em";
            
            // AR Response Section 2 
            self05.rs2fontsize2 = "font-size:" + ((0.00265)*(viewWidth)-0.10556) + "em";
            
            // AR Response Section 3 
            self05.rs3positiontop1 = "top:" + ((0.04938)*(viewWidth)+2.22222) + "px";
            self05.rs3positiontop2 = "top:" + ((0.43210)*(viewWidth)-5.55556) + "px";         
            self05.rs3positionleft1 = "left:" + ((0.01235)*(viewWidth)+70.55556)    + "%";
            self05.rs3width3 = "width:" + ((0.09877)*(viewWidth)+34.44444) + "px";          // AR_150_70 
            self05.rs3fontsize5 = "font-size:" + ((0.00370)*(viewWidth)-0.33333) + "em"; 
            
            compFactory.logView(05);
        }]
    })
    
//***********************************************************************************************************************************************************    
    
    .component('rootComponent06', {
        
        templateUrl: 'components/components04_07/tmpl_06/viewTmpl_06.html',
       
         controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self06 = this; 
            
            // AR Response Section 1
            self06.rs1width1 = "width:" + ((-0.01235)*(viewWidth)+64.44444) + "%";
            self06.rs1fontsize1 = "font-size:" + ((0.00062)*(viewWidth)+0.52778) + "em";
            self06.rs1fontsize3 = "font-size:" + ((0.00272)*(viewWidth)-0.17778) + "em";
            self06.rs1width2 = "width:" + ((0.01235)*(viewWidth)+35.55556) + "%";
            self06.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            
            // AR Response Section 2
            self06.rs2fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+0.19444) + "em";
            
            // AR Response Section 3
            self06.rs3positiontop1 = "top:" + ((0.04938)*(viewWidth)-7.77778) + "px";
            self06.rs3positionleft1 = "left:" + ((0.01235)*(viewWidth)+70.55556)    + "%";  // AR_85_75
            self06.rs3width3 = "width:" + ((0.09877)*(viewWidth)+34.44444) + "px";          // AR_150_70
            self06.rs3fontsize4 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em";
             
            compFactory.logView(06);
        }]
    })
    
//***********************************************************************************************************************************************************   

     .component('rootComponent07', {
        
        templateUrl: 'components/components04_07/tmpl_07/viewTmpl_07.html',
       
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self07 = this; 
            
            // AR Response Section 1
            self07.rs1width1 = "width:" + ((-0.01235)*(viewWidth)+64.44444) + "%";
            self07.rs1fontsize3 = "font-size:" + ((0.00272)*(viewWidth)-0.17778) + "em";
            self07.rs1fontsize1 = "font-size:" + ((0.00062)*(viewWidth)+0.52778) + "em";
            self07.rs1width2 = "width:" + ((0.01235)*(viewWidth)+35.55556) + "%";
            self07.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            
            // AR Response Section 2
            self07.rs2fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+0.19444) + "em";
            self07.rs2margintop1 = "margin-top:" + ((0.01481)*(viewWidth)+2.66667) + "px";
            self07.rs2marginbottom1 = "margin-bottom:" + ((0.01481)*(viewWidth)+2.66667) + "px";
            
            // AR Response Section 3
            self07.rs3positiontop1 = "top:" + ((0.04938)*(viewWidth)-7.77778) + "px";
            self07.rs3positionleft1 = "left:" + ((0.01235)*(viewWidth)+70.55556)    + "%";  // AR_85_75        
            self07.rs3width3 = "width:" + ((0.09877)*(viewWidth)+34.44444) + "px";          // AR_150_70
            
            compFactory.logView(07);
        }]
    });
    
//***********************************************************************************************************************************************************   
  