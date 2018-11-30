// https://docs.angularjs.org/api/ng/provider/$sceDelegateProvider#resourceUrlWhitelist
// https://docs.angularjs.org/api/ng/service/$sce#impact-on-loading-templates
// https://stackoverflow.com/questions/23823010/how-to-enable-cors-in-angularjs
// https://enable-cors.org/
// https://www.html5rocks.com/en/tutorials/cors/
// https://humanwhocodes.com/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/



angular.module("viewNav")

    .component('ttd', {
        
        // templateUrl: 'https://www.tarptiedown.com/ttd-vn/ttd-vn-top-menu-pages/ttd.html',
        templateUrl: 'components/top_menu/ttd/ttd.html',
       
        controller: ['GetSet', 'viewManager', '$sce', function(GetSet, viewManager, $sce){
            var viewWidth = GetSet.getViewWidth();
                
            var ttdSelf = this;
            
            ttdSelf.fill1 = "TTD Home";
            ttdSelf.fill2 = "Tarp Tie Down home page";
            ttdSelf.fill3 = "TTD Home";
            
            // Response Section 1
            ttdSelf.rs1fontsize1 = "font-size:" + ((0.00086)*(viewWidth)+0.48889) + "em";             /* AR_2.00_0.75 */
            ttdSelf.rs1fontsize2 = "font-size:" + ((0.00049)*(viewWidth)+0.62222) + "em";             /* AR_1.20_0.90 */
            ttdSelf.rs1fontsize3 = "font-size:" + ((0.00031)*(viewWidth)+0.73889) + "em";             /* AR_1.10_0.85 */
            ttdSelf.rs1left1 = "left:" + ((0.05309)*(viewWidth)-17.11111) + "%";                      /* AR_45.00_2.00 */
            
            viewManager.topMenuToHighlight(0);    
        }]
    })

    .component('intro', {
        
        templateUrl: 'components/top_menu/intro/intro.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var introSelf = this;

            // AR Section 1
            introSelf.rs1fontsize1 = "font-size:" + ((0.00123)*(viewWidth)+0.55556) + "em";             /* AR_1.99_1.00 */
            
            // AR Section 2
            introSelf.rs2width1 = "width:" + ((-0.03086)*(viewWidth)+66.11111) + "%";                   /* AR_30_55 */
            introSelf.rs2fontsize4 = "font-size:" + ((0.00062)*(viewWidth)+0.52778) + "em";             /* AR_1.25_0.75 */
            introSelf.rs2margintop2 = "margin-top:" + ((0.02469)*(viewWidth)-8.88889) + "px";           /* AR_20.00_-0.00 */
            introSelf.rs2fontsize5 = "font-size:" + ((0.00074)*(viewWidth)+0.43333) + "em";             /* AR_1.30_0.70 */
            introSelf.rs2width2 = "width:" + ((0.02469)*(viewWidth)+41.11111) + "%";
            introSelf.rs2fontsize6 = "font-size:" + ((0.00136)*(viewWidth)+0.41111) + "em";             /* AR_2.00_0.90 */
            introSelf.rs2margin1 = "margin:" + ((0.01728)*(viewWidth)+3.77778) + "px";                  /* AR_24.00_10.00 */
            introSelf.rs2margintop1 = "margin-top:" + ((0.01852)*(viewWidth)-1.66667) + "px";           /* AR_20.00_5.00 */
            introSelf.rs2borderwidth1 = "border-width:" + ((0.00118)*(viewWidth)+0.62353) + "px";       /* AR_2.00_1.05 */
            introSelf.rs2fontweight1 = "font-weight:" + ((-0.98765)*(viewWidth)+1255.55556);            /* AR_100.01_900.00 */
            introSelf.rs2padding1 = "padding:" + ((0.00988)*(viewWidth)-1.55556) + "px 0px";            /* AR_10.00_2.00 */
            
            // AR Section 3
            introSelf.rs3fontsize1 = "font-size:" + ((0.00077)*(viewWidth)+0.59722) + "em";         /* AR_1.50_0.87 */
            introSelf.rs3width1 = "width:" + ((0.01852)*(viewWidth)+53.33333) + "%";         /* AR_1.50_0.87 */
            
            
            // AR Section 4
            introSelf.rs4fontsize1 = "font-size:" + ((0.00065)*(viewWidth)+0.49294) + "em";         /* AR_1.25_0.73 */
            
            viewManager.topMenuToHighlight(1);    
            
        }]
    })
    
    .component('buyprice', {
        
        templateUrl: 'components/top_menu/buy_price/buy_price.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var buyPriceSelf = this;
            
            buyPriceSelf.fontsize1 = "font-size:" + ((0.00043)*(viewWidth)+0.49444) + "em";             /* AR_1.00_0.65 */
            buyPriceSelf.fontsize2 = "font-size:" + ((0.00062)*(viewWidth)+0.27778) + "em";             /* AR_1.00_0.50 */
            buyPriceSelf.width1 = "width:" + ((-0.01235)*(viewWidth)+54.44444) + "%";                   /* AR_39.99_50.00 */
            
            buyPriceSelf.fontweight1 = "font-weight:" + ((-0.98765)*(viewWidth)+1255.55556);            /* AR_100.01_900.00 */
            buyPriceSelf.padding1 = "padding:" + ((0.00988)*(viewWidth)-1.55556) + "px 10px";           /* AR_10.00_2.00 */
            buyPriceSelf.borderwidth1 = "border-width:" + ((0.00118)*(viewWidth)+0.62353) + "px";       /* AR_2.00_1.05 */
            buyPriceSelf.margin1 = "margin:" + ((0.00617)*(viewWidth)+2.77778) + "px 0px";              /* AR_10.00_5.00 */
            
            buyPriceSelf.padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px 5px";            /* AR_10.00_5.00 */
            
            viewManager.topMenuToHighlight(2);  
            
        }]
    })
    
    .component('products', {
        
        templateUrl: 'components/top_menu/products/products.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var productsSelf = this;
            
            productsSelf.fontsize1 = "font-size:" + ((0.00043)*(viewWidth)+0.49444) + "em";   /* AR_1.00_0.65 */
            productsSelf.fontsize2 = "font-size:" + ((0.00062)*(viewWidth)+0.27778) + "em";   /* AR_1.00_0.50 */
            
            productsSelf.padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px 5px";            /* AR_10.00_5.00 */
            productsSelf.borderwidth1 = "border-width:" + ((0.00118)*(viewWidth)+0.62353) + "px";       /* AR_2.00_1.05 */
            productsSelf.margin1 = "margin:" + ((0.00617)*(viewWidth)+2.77778) + "px 0px";              /* AR_10.00_5.00 */
            productsSelf.fontweight1 = "font-weight:" + ((-0.98765)*(viewWidth)+1255.55556);            /* AR_100.01_900.00 */
            
            viewManager.topMenuToHighlight(3);  
            
        }]
    })
    
    .component('reviews', {
        
        //template: "<h1>This is the Reviews template",

        templateUrl: 'components/top_menu/reviews/testimonials.html',
        
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
            
            var reviewSelf = this;
            
            reviewSelf.fontsize1 = "font-size:" + ((0.00049)*(viewWidth)+0.42222) + "em";      /* AR_1.00_0.60 */
            
            viewManager.topMenuToHighlight(4);  
            
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
    
    