angular.module("viewNav")

    .component('intro', {
        
        templateUrl: 'components/top_menu/intro/intro.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var introSelf = this;
            
            // AR Section 1
            introSelf.rs1fontsize1 = "font-size:" + ((0.00123)*(viewWidth)+0.55556) + "em";         /* AR_1.99_1.00 */
            
            // AR Section 2
            introSelf.rs2width1 = "width:" + ((-0.02469)*(viewWidth)+58.88889) + "%";               /* AR_30_50 */
            introSelf.rs2fontsize4 = "font-size:" + ((0.00062)*(viewWidth)+0.52778) + "em";
            introSelf.rs2fontsize5 = "font-size:" + ((0.00099)*(viewWidth)+0.34444) + "em";         /* AR_1.50_0.70 */
            introSelf.rs2width2 = "width:" + ((0.02469)*(viewWidth)+41.11111) + "%";
            introSelf.rs2fontsize6 = "font-size:" + ((0.00136)*(viewWidth)+0.41111) + "em";         /* AR_2.00_0.90 */
            introSelf.rs2margin1 = "margin:" + ((0.01728)*(viewWidth)+3.77778) + "px";              /* AR_24.00_10.00 */
            introSelf.rs2margintop1 = "margin-top:" + ((0.04938)*(viewWidth)-17.77778) + "px";       /* AR_20.00_-0.00 */
            
            // AR Section 3
            introSelf.rs3fontsize1 = "font-size:" + ((0.00077)*(viewWidth)+0.59722) + "em";         /* AR_1.50_0.87 */
            
            // AR Section 4
            introSelf.rs4fontsize1 = "font-size:" + ((0.00065)*(viewWidth)+0.49294) + "em";         /* AR_1.25_0.73 */
            
            introSelf.transition = function(){
                var myWindow = window.open("components/top_menu/intro/transition.html", "", "width=250,height=200,top=100");
            };
            
            introSelf.newWindow = function(){
                var left = viewWidth/2-300;
                var myWindow = window.open("components/top_menu/intro/navigate.html", "", "width=800,height=600,top=100,left="+left);
            };
            
            viewManager.topMenuToHighlight(0);    
            
            
        }]
    })
    
    .component('buyprice', {
        
        templateUrl: 'components/top_menu/buy_price/buy_price.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var buyPriceSelf = this;
            
            buyPriceSelf.fontsize1 = "font-size:" + ((0.00043)*(viewWidth)+0.49444) + "em";   /* AR_1.00_0.65 */
            buyPriceSelf.fontsize2 = "font-size:" + ((0.00062)*(viewWidth)+0.27778) + "em";   /* AR_1.00_0.50 */
            buyPriceSelf.width1 = "width:" + ((-0.01235)*(viewWidth)+54.44444) + "%";       /* AR_39.99_50.00 */
            
            viewManager.topMenuToHighlight(1);  
                
        }]
    })
    
    .component('products', {
        
        templateUrl: 'components/top_menu/products/products.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var productsSelf = this;
            
            productsSelf.viewNgroup =   function(view, group){
                                            viewManager.fromProducts(view,group);
                                        };
            
            productsSelf.fontsize1 = "font-size:" + ((0.00043)*(viewWidth)+0.49444) + "em";   /* AR_1.00_0.65 */
            productsSelf.fontsize2 = "font-size:" + ((0.00062)*(viewWidth)+0.27778) + "em";   /* AR_1.00_0.50 */
            productsSelf.width1 = "width:" + ((-0.01235)*(viewWidth)+54.44444) + "%";       /* AR_39.99_50.00 */    // Not used at the moment
            
            viewManager.topMenuToHighlight(2);  
            
        }]
    })
    
    .component('reviews', {
        
        //template: "<h1>This is the Reviews template",

        templateUrl: 'components/top_menu/reviews/testimonials.htm',
        
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
            
            var reviewSelf = this;
            
            reviewSelf.fontsize1 = "font-size:" + ((0.00049)*(viewWidth)+0.42222) + "em";      /* AR_1.00_0.60 */
            
            viewManager.topMenuToHighlight(3);  
            
        }]
    })
    
    .component('policy', {
        
        templateUrl: 'components/top_menu/policy_tmpl/policy.html',
       
        controller: ['GetSet', function(GetSet){
            var viewWidth = GetSet.getViewWidth();
            
        }]
    })
    
    .component('transition', {
        
        //template: "<h1>This is the Policy template",

        templateUrl: 'components/top_menu/intro/transition.html',
       
        controller: ['GetSet', function(GetSet){
            var viewWidth = GetSet.getViewWidth();
            
            var transitionSelf = this;
            
            transitionSelf.fontsize1 = "font-size:" + ((0.00123)*(viewWidth)+0.55556) + "em";
            
        }]
    });
    
    