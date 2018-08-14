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
            self00.rs3fontsize1 = "font-size:" + ((0.00095)*(viewWidth)+0.38778) + "em";        /* AR_1.50_0.73 */
            self00.rs3top1 = "top:" + ((0.01852)*(viewWidth)+8.33333) + "px";                   /* AR_30.00_15.00 */      
            self00.rs3marginleft1= "margin-left:" + ((0.01852)*(viewWidth)-1.66667) + "px";     /* AR_20.00_5.00 */
            self00.rs3padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.01235)*(viewWidth)+5.55556) + "px";    /* AR_10.00_5.00 */ /* AR_20.01_10.00 */
            
            // Sets mode of the "NAVIGATE" button
            self00.display2 = false;
            self00.morelessText2 = "NAVIGATE";
            self00.moreless2 = function(){
                if(self00.morelessText2 === "NAVIGATE"){
                    self00.morelessText2 = "HIDE NAVIGATE";
                    self00.display2 = true;
                } 
                else {
                    self00.morelessText2 = "NAVIGATE";
                    self00.display2 = false;
                }
            }; 
            
            compFactory.logView(00);
        }]
    })
    
//***********************************************************************************************************************************************************    
    
    .component('rootComponent01', {
        
        templateUrl: 'components/components00_03/tmpl_01/viewTmpl_01.html',
       
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self01 = this; 
            
            // Response Section 1
            self01.rs1width1 = "width:" + ((-0.01235)*(viewWidth)+49.44444) + "%";
            self01.rs1width2 = "width:" + ((0.01235)*(viewWidth)+50.55556) + "%";
            self01.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            self01.rs1margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
            
            // Response Section 2
            self01.rs2fontsize1 = "font-size:" + ((0.00206)*(viewWidth)+0.59118) + "em";
            self01.rs2fontsize2 = "font-size:" + ((0.00247)*(viewWidth)+0.11111) + "em";    // AR_3_1
            self01.rs2fontsize3 = "font-size:" + ((0.00093)*(viewWidth)+0.41667) + "em";
            
            
            self01.rs2margintop1 = "margin-top:" + ((0.01852)*(viewWidth)-1.66667) + "px";    /* AR_20px_5px */
            self01.rs2marginbottom1 = "margin-bottom:" + ((0.01605)*(viewWidth)+1.22222) + "px";    /* AR_20px_7px */
            
            // Response Section 3
            self01.rs3fontsize1 = "font-size:" + ((0.00095)*(viewWidth)+0.38778) + "em";        /* AR_1.50_0.73 */
            self01.rs3top1 = "top:" + ((0.01852)*(viewWidth)+8.33333) + "px";                   /* AR_30.00_15.00 */      
            self01.rs3marginleft1= "margin-left:" + ((0.01852)*(viewWidth)-1.66667) + "px";     /* AR_20.00_5.00 */
            self01.rs3padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.01235)*(viewWidth)+5.55556) + "px";    /* AR_10.00_5.00 */ /* AR_20.01_10.00 */
            
            // Sets mode of the "NAVIGATE" button
            self01.display2 = false;
            self01.morelessText2 = "NAVIGATE";
            self01.moreless2 = function(){
                if(self01.morelessText2 === "NAVIGATE"){
                    self01.morelessText2 = "HIDE NAVIGATE";
                    self01.display2 = true;
                } 
                else {
                    self01.morelessText2 = "NAVIGATE";
                    self01.display2 = false;
                }
            }; 
            
            compFactory.logView(01);
        }]
    })
    
 //***********************************************************************************************************************************************************    
    
    .component('rootComponent02', {
        
        templateUrl: 'components/components00_03/tmpl_02/viewTmpl_02.html',

         controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self02 = this; 

            // Response Section 1
            self02.rs1fontsize1 = "font-size:" + ((0.00142)*(viewWidth)+0.33889) + "em";
            self02.rs1width1 = "width:" + ((-0.00617)*(viewWidth)+57.22222) + "%";
            self02.rs1width2 = "width:" + ((0.00617)*(viewWidth)+42.77778) + "%"; 
            self02.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            self02.rs1margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
          
            // Response Section 2
            self02.rs2fontsize2 = "font-size:" + ((0.00247)*(viewWidth)+0.11111) + "em"; 
             
            // Response Section 3
            self02.rs3fontsize3 = "font-size:" + ((0.00093)*(viewWidth)+0.41667) + "em";
            
            // Response Section 4
            self02.rs4fontsize1 = "font-size:" + ((0.00095)*(viewWidth)+0.38778) + "em";        /* AR_1.50_0.73 */
            self02.rs4top1 = "top:" + ((0.01852)*(viewWidth)+8.33333) + "px";                   /* AR_30.00_15.00 */      
            self02.rs4marginleft1= "margin-left:" + ((0.01852)*(viewWidth)-1.66667) + "px";     /* AR_20.00_5.00 */
            self02.rs4padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.01235)*(viewWidth)+5.55556) + "px";    /* AR_10.00_5.00 */ /* AR_20.01_10.00 */
            
            // Sets mode of the "NAVIGATE" button
            self02.display2 = false;
            self02.morelessText2 = "NAVIGATE";
            self02.moreless2 = function(){
                if(self02.morelessText2 === "NAVIGATE"){
                    self02.morelessText2 = "HIDE NAVIGATE";
                    self02.display2 = true;
                } 
                else {
                    self02.morelessText2 = "NAVIGATE";
                    self02.display2 = false;
                }
            };     
            
            compFactory.logView(02);
        }]    
    })
//***********************************************************************************************************************************************************    
    
    .component('rootComponent03', {
        
        templateUrl: 'components/components00_03/tmpl_03/viewTmpl_03.html',
       
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
            var viewWidth = GetSet.getViewWidth();

            var self03 = this; 
            
            // Response Section 1
            self03.rs1fontsize1 = "font-size:" + ((0.00241)*(viewWidth)-0.06667) + "em";
            self03.rs1margintop1 = "margin-top:" + ((0.01235)*(viewWidth)-4.44444) + "px";
            self03.rs1margintop2 = "margin-top:" + ((0.01235)*(viewWidth)+0.55556) + "px";
            
            // Response Section 2
            self03.rs2fontsize2 = "font-size:" + ((0.00265)*(viewWidth)-0.10556) + "em";
            
            // Response Section 3
            self03.rs3fontsize1 = "font-size:" + ((0.00095)*(viewWidth)+0.38778) + "em";        /* AR_1.50_0.73 */
            self03.rs3top1 = "top:" + ((0.01852)*(viewWidth)+8.33333) + "px";                   /* AR_30.00_15.00 */      
            self03.rs3marginleft1= "margin-left:" + ((0.01852)*(viewWidth)-1.66667) + "px";     /* AR_20.00_5.00 */
            self03.rs3padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.01235)*(viewWidth)+5.55556) + "px";    /* AR_10.00_5.00 */ /* AR_20.01_10.00 */
            
            // Sets mode of the "NAVIGATE" button
            self03.display2 = false;
            self03.morelessText2 = "NAVIGATE";
            self03.moreless2 = function(){
                if(self03.morelessText2 === "NAVIGATE"){
                    self03.morelessText2 = "HIDE NAVIGATE";
                    self03.display2 = true;
                } 
                else {
                    self03.morelessText2 = "NAVIGATE";
                    self03.display2 = false;
                }
            };
            
            compFactory.logView(03);
        }]
    });
    
//***********************************************************************************************************************************************************   

    
    
  