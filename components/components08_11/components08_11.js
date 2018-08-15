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
            self08.rs2fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+0.19444) + "em";            // AR_2_0.75
            self08.rs2marginbottom1 = "margin-bottom:" + ((0.06173)*(viewWidth)+7.77778) + "px";    // AR_80_30 
            
            // Response Section 3
            self08.rs3fontsize1 = "font-size:" + ((0.00095)*(viewWidth)+0.38778) + "em";            /* AR_1.50_0.73 */
            self08.rs3margintop1 = "margin-top:" + ((0.03704)*(viewWidth)+11.66667) + "px";         /* AR_55.00_25.00 */
            self08.rs3top1 = "top:" + ((-0.01235)*(viewWidth)-10.55556) + "px";                     /* AR_-25.01_-15.00 */
            self08.rs3marginleft1= "margin-left:" + ((0.01852)*(viewWidth)-1.66667) + "px";         /* AR_20.00_5.00 */
            self08.rs3padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.01235)*(viewWidth)+5.55556) + "px";    /* AR_10.00_5.00 */ /* AR_20.01_10.00 */
            
            // Sets mode of the "NAVIGATE" button
            self08.display2 = false;
            self08.morelessText2 = "NAVIGATE";
            self08.moreless2 = function(){
                if(self08.morelessText2 === "NAVIGATE"){
                    self08.morelessText2 = "HIDE NAVIGATE";
                    self08.display2 = true;
                } 
                else {
                    self08.morelessText2 = "NAVIGATE";
                    self08.display2 = false;
                }
            };    
          
            compFactory.logView(08);
        }]
    })
    
//***********************************************************************************************************************************************************     
    
    .component('rootComponent09', {
        
        templateUrl: 'components/components08_11/tmpl_09/viewTmpl_09.html',
       
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self09 = this; 

            // Response Section 1
            self09.rs1fontsize1 = "font-size:" + ((0.00235)*(viewWidth) + 0.24706) + "em";          /* AR_3.00_1.09 */
            self09.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";          /* AR_15.01_5.00 */
            self09.rs1marginbottom1 = "margin-bottom:" + ((0.01852)*(viewWidth)+3.33333) + "px";    /* AR_25.00_10.00 */

            // Response Section 2
            self09.rs2margintop1 = "margin-top:" + ((0.03086)*(viewWidth)-11.11111) + "px";
            self09.rs2marginbottom1 = "margin-bottom:" + ((0.03704)*(viewWidth)-13.33333) + "px";
            self09.rs2paddingright = "padding-right:" + ((0.02469)*(viewWidth)+1.11111) + "px";     /* AR_30.00_10.00 */
            
            
            self09.rs2width1 = "width:" + ((0.00353)*(viewWidth) + -1.12941) + "%";
            self09.rs2width2 = "width:" + ((-0.00941)*(viewWidth) + 58.01176) + "%";
            self09.rs2fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+0.19444) + "em";
            self09.rs2fontsize3 = "font-size:" + ((0.00165)*(viewWidth) + 0.07294) + "em";
            
            // Response Section 3
            self09.rs3positiontop1 = "top:" + ((0.03704)*(viewWidth)+6.66667) + "px";
            self09.rs3positionleft1 = "left:" + ((0.01235)*(viewWidth)+65.55556) + "%";
            self09.rs3width1 = "width:" + ((0.09877)*(viewWidth)+34.44444) + "px";
            
            
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
   
  