angular.module('viewNav')
    
    .component('rootComponent08', {
        
        templateUrl: 'components/components08_11/tmpl_08/viewTmpl_08.html',
       
        controller: ['compFactory', 'GetSet', 'NavMenuFactory', function(compFactory, GetSet, NavMenuFactory){
            var viewWidth = GetSet.getViewWidth();

            var self08 = this; 
            
            // Response Section 1
            self08.rs1fontsize3 = "font-size:" + ((0.00272)*(viewWidth)-0.17778) + "em";    // AR_3_0.8
            self08.rs1width1 = "width:" + ((-0.01235)*(viewWidth)+64.44444) + "%";          // AR_50_60
            self08.rs1fontsize1 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em";    // AR_1.25_0.75
            self08.rs1width2 = "width:" + ((0.01235)*(viewWidth)+35.55556) + "%";           // AR_50_40
            self08.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";  // AR_10_0
            
            // Response Section 2
            self08.rs2fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+0.19444) + "em";            // AR_2_0.75
            self08.rs2marginbottom1 = "margin-bottom:" + ((0.06173)*(viewWidth)+7.77778) + "px";    // AR_80_30 
            
            // Response Section 3
            self08.rs3fontsize1 = "font-size:" + ((0.00095)*(viewWidth)+0.38778) + "em";            /* AR_1.50_0.73 */
            self08.rs3margintop1 = "margin-top:" + ((0.03704)*(viewWidth)+11.66667) + "px";         /* AR_55.00_25.00 */
            
            compFactory.logView(08);
        }]
    })
    
//***********************************************************************************************************************************************************     
    
    .component('rootComponent09', {
        
        templateUrl: 'components/components08_11/tmpl_09/viewTmpl_09.html',
       
        controller: ['compFactory', 'GetSet', 'NavMenuFactory', function(compFactory, GetSet, NavMenuFactory){
            var viewWidth = GetSet.getViewWidth();

            var self09 = this; 

            // Response Section 1
            self09.rs1fontsize1 = "font-size:" + ((0.00235)*(viewWidth) + 0.24706) + "em";          /* AR_3.00_1.09 */
            self09.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";          /* AR_15.01_5.00 */
            self09.rs1marginbottom1 = "margin-bottom:" + ((0.01852)*(viewWidth)+3.33333) + "px";    /* AR_25.00_10.00 */

            // Response Section 2
            self09.rs2margintop1 = "margin-top:" + ((0.03086)*(viewWidth)-11.11111) + "px";
            self09.rs2marginbottom1 = "margin-bottom:" + ((0.03704)*(viewWidth)-13.33333) + "px";
            self09.rs2width1 = "width:" + ((0.00353)*(viewWidth) + -1.12941) + "%";
            self09.rs2fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+0.19444) + "em";
            self09.rs2fontsize3 = "font-size:" + ((0.00165)*(viewWidth) + 0.07294) + "em";
            
            // Response Section 3 (Not needed for now)

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
   
  