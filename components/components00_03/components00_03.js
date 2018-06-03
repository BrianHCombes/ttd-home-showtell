angular.module('viewNav')
     
//***********************************************************************************************************************************************************     
    .component('rootComponent00', {
        
        templateUrl: 'components/components00_03/tmpl_00/viewTmpl_00.html',
        
        controller: ['compFactory', 'GetSet', function(compFactory, GetSet){
                
                var self = this; 
/*                 
                var vpWidth = window.innerWidth; 
                // alert("In the template: " + vpWidth);
                if(vpWidth >= 1170){
                    vpWidth=1170;
                }; 
*/
                var vpWidth = "1170px";
                var vpWidthTest = GetSet.getVpWidth();
                
                self.reportedWidth = vpWidthTest + "px";
                self.style2 = "color:blue";
         
                
                self.color1 = "color:red";
                
                self.fontsize1 = "font-size:" + ((0.01605)*(vpWidth) + 5.22222) + "px";
                //document.getElementById("testTD1").style.fontSize = (0.01605)*(vpWidth) + 5.22222 + "px";       // 1170:24px - 360:11px
                
                self.fontsize2 = "font-size:" + ((0.01481)*(vpWidth) + 6.66667) + "px";
                //document.getElementById("testTD2").style.fontSize = (0.01481)*(vpWidth) + 6.66667 + "px";       // 1170:24px - 360:12px
                
                self.lineheight1 = "line-height:" + ((0.02469)*(vpWidth) + 101.11111) + "%";
                //document.getElementById("testTD2").style.lineHeight = (0.02469)*(vpWidth) + 101.11111 + "%";    // 1170:24px - 360:12px
                
                self.width1 = "width:" + ((0.02778)*(vpWidth) + 17.50000) + "%";
                //document.getElementById("testTD3").style.width = (0.02778)*(vpWidth) + 17.50000 + "%";          // 1170:50% - 360:27.5%
                self.width2 = "width:" + ((-0.02778)*(vpWidth) + 82.50000) + "%";
                //document.getElementById("testTD2").style.width = (-0.02778)*(vpWidth) + 82.50000 + "%";         // 1170:50% - 360:72.5%
                self.width3 = "width:" + ((0.57407)*(vpWidth) + -116.66667) + "px";
                //document.getElementById("testTD4").style.width = (0.57407)*(vpWidth) + -116.66667 + "px";       // 1170:555px - 360:90px
                
                self.height1 = "height:" + ((0.15432)*(vpWidth) + 69.44444) + "px";
                //document.getElementById("testTD4").style.height = (0.15432)*(vpWidth) + 69.44444 + "px";        // 1170:250px - 360:125px
                
                self.borderradius1 = "border-radius:25px";
                //document.getElementById("testTD1").style.borderRadius = "25px";

            compFactory.logView(00);
        }]
    })
    
//***********************************************************************************************************************************************************    
    
    .component('rootComponent01', {
        
        templateUrl: 'components/components00_03/tmpl_01/viewTmpl_01.html',
       
        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(01);
        }]
    })
    
 //***********************************************************************************************************************************************************    
    
    .component('rootComponent02', {
        
        templateUrl: 'components/components00_03/tmpl_02/viewTmpl_02.html',

        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(02);
        }]    
    })
//***********************************************************************************************************************************************************    
    
    .component('rootComponent03', {
        
        templateUrl: 'components/components00_03/tmpl_03/viewTmpl_03.html',
       
        controller: ['compFactory', function(compFactory){
            
            compFactory.logView(03);
        }]
    });
    
//***********************************************************************************************************************************************************   

    
    
  