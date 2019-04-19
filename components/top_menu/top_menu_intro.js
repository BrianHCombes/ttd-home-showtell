angular.module("viewNav")
    .component('intro', {
        
        templateUrl: 'components/top_menu/intro/intro.html',
       
        controller: ['GetSet', 'viewManager', 'NavMenuFactory', 'topMenuService', function(GetSet, viewManager, NavMenuFactory, topMenuService){
            var viewWidth = GetSet.getViewWidth();
                
            var introSelf = this;

            // AR Section 1
            introSelf.rs1fontsize1 = "font-size:" + ((0.00123)*(viewWidth)+0.55556) + "em";     /* AR_1.99_1.00 */
            introSelf.rs1width1 = "width:" + ((-0.02469)*(viewWidth)+78.88889) + "%";           // AR_1170_50.00_360_70.00
            
            // AR Section 2
            introSelf.rs2margin1 = "margin:" + ((0.01728)*(viewWidth)+3.77778) + "px";          /* AR_24.00_10.00 */
            
            // AR Section 3
            introSelf.rs3fontsize1 = "font-size:" + ((0.00077)*(viewWidth)+0.59722) + "em";     /* AR_1.50_0.87 */
            introSelf.rs3width1 = "width:" + ((0.01852)*(viewWidth)+53.33333) + "%";            /* AR_1.50_0.87 */
            
            // AR Section 4
            introSelf.rs4fontsize1 = "font-size:" + ((0.00065)*(viewWidth)+0.49294) + "em";     /* AR_1.25_0.73 */
            
            viewManager.topMenuToHighlight(0);    
        }]
    })
    
    .component('transition', {
        
        templateUrl: 'components/top_menu/intro/transition.html',
       
        controller: ['GetSet', function(GetSet){
            var viewWidth = GetSet.getViewWidth();
            
            var transitionSelf = this;
            
            transitionSelf.fontsize1 = "font-size:" + ((0.00056)*(viewWidth)+0.60000) + "em";   // AR_1170_1.25_360_0.80
            
        }]
    });