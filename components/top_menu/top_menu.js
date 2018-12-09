


angular.module("viewNav")

    .component('ttd', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/ttd.html',
        templateUrl: 'components/top_menu/ttd/ttd.html',
       
        controller: ['GetSet', 'viewManager', '$sce', function(GetSet, viewManager, $sce){
            var viewWidth = GetSet.getViewWidth();
                
            var ttdSelf = this;
            
            ttdSelf.fill1 = "TTD Home";
            ttdSelf.fill2 = "Tarp Tie Down home page";
            ttdSelf.fill3 = "TTD Home";
            
            // Response Section 1
            ttdSelf.rs1fontsize1 = "font-size:" + ((0.00086)*(viewWidth)+0.48889) + "em";             /* AR_2.00_0.75 */
            ttdSelf.rs1fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+1.19444) + "em";             // AR_1170_3.00_360_1.75
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
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/buy_price.html',
        templateUrl: 'components/top_menu/buy_price/buy_price.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var buyPriceSelf = this;
            
            buyPriceSelf.title1 = "Jumps down to specific product price in the listing below";
            buyPriceSelf.title2 = "Jumps directly to the specific store item with the full price table";
            buyPriceSelf.title3 = "This quick menu provides quick pricing below or the full price tables listed at our store.";
            
            var quickLIST = [ 
                {"localview":"#/buyprice#EZGY", "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_10_14","product":"Standard EZ Grabbit Yellow"},
                {"localview":"#/buyprice#EZGBL","regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_10_11","product":"Standard EZ Grabbit Black"},
                {"localview":"#/buyprice#EZGG", "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_10_15","product":"Classic EZ Grabbit Green"},
                {"localview":"#/buyprice#LG",   "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_13",   "product":"Long Grabbit"},
                {"localview":"#/buyprice#MG",   "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_12",   "product":"Mini Grabbit"},
                {"localview":"#/buyprice#EZA",  "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=17",     "product":"EZ Adjust Rope Adjuster"},
                {"localview":"#/buyprice#RB",   "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=18",     "product":"RockBuster Ground Stake"},
                {"localview":"#/buyprice#BG",   "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=19",     "product":"Bag Grabbit Bag Handle"},
                {"localview":"#/buyprice#KPR",  "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_10_16","product":"EZ Grabbit Keeper"},
                {"localview":"#/buyprice#CB",   "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=20",     "product":"Carry Bag"},
                {"localview":"#/buyprice#TP",   "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=21",     "product":"Tent Poles"}
            ];
            buyPriceSelf.quickLIST = quickLIST;
            
            // The toTop function is a workaround to alternate the target href so it always goes to the top should a scroll down be done and toTop() is clicked again. 
            var pickPageTop = true;
            buyPriceSelf.toTop = function(){
                if(pickPageTop === true){
                    window.location.href="#/buyprice#pageTop1";
                    pickPageTop = false;
                } 
                else {
                    window.location.href="#/buyprice#pageTop2";
                    pickPageTop = true;
                };
            };
            
            // Response Section
            buyPriceSelf.top1 = "top:" + ((0.00185)*(viewWidth)-0.16667) + "%";                 // AR_1170_2.00_360_0.50
            
            buyPriceSelf.fontsize1 = "font-size:" + ((0.00043)*(viewWidth)+0.49444) + "em";             /* AR_1.00_0.65 */
            buyPriceSelf.fontsize2 = "font-size:" + ((0.00062)*(viewWidth)+0.27778) + "em";             // AR_1170_1.00_360_0.50
            buyPriceSelf.fontsize3 = "font-size:" + ((0.00037)*(viewWidth)+0.56985) + "em";             // AR_1170_1.00_320_0.69
            buyPriceSelf.fontsize4 = "font-size:" + ((0.00185)*(viewWidth)+0.83333) + "em";             // AR_1170_3.00_360_1.50
            buyPriceSelf.fontsize5 = "font-size:" + ((0.00123)*(viewWidth)+0.55556) + "em";             // AR_1170_2.00_360_1.00
            
            buyPriceSelf.width1 = "width:" + ((-0.06118)*(viewWidth)+116.57647) + "%";   // AR_1170_45.00_320_97.00
            
            buyPriceSelf.fontweight1 = "font-weight:" + ((-0.98765)*(viewWidth)+1255.55556);            /* AR_100.01_900.00 */
            buyPriceSelf.padding1 = "padding:" + ((0.00988)*(viewWidth)-1.55556) + "px 10px";           /* AR_10.00_2.00 */
            buyPriceSelf.borderwidth1 = "border-width:" + ((0.00118)*(viewWidth)+0.62353) + "px";       /* AR_2.00_1.05 */
            buyPriceSelf.margin1 = "margin:" + ((0.00617)*(viewWidth)+2.77778) + "px 0px";              /* AR_10.00_5.00 */
            
            buyPriceSelf.padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px 5px";            /* AR_10.00_5.00 */
            
            viewManager.topMenuToHighlight(2);  
            
        }]
    })
    
    .component('products', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/products.html',
        templateUrl: 'components/top_menu/products/products.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var productsSelf = this;
            
            productsSelf.title1 = "Jumps to a short product overview in the listing below";
            productsSelf.title2 = "Full coverage of the product including detailed discussion, field applications, and specifications";
            productsSelf.title3 = "The quick menu takes you to the product overviews below or to the product application pages.";
            
            var quickLIST = [ 
                {"localview":"#/products#EZGY", "regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-ezg/index-ezg.html",                                      "product":"Standard EZ Grabbit Yellow"},
                {"localview":"#/products#EZGBL","regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-ezg/index-ezg.html",                                      "product":"Standard EZ Grabbit Black"},
                {"localview":"#/products#EZGG", "regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-ezg/index-ezg.html",                                      "product":"Classic EZ Grabbit"},
                {"localview":"#/products#LG", "regionURL":"https://www.tarptiedown.com/components/components00_03/tmpl_01/ttd-vn-lg-not-complete-msg.html",    "product":"Long Grabbit"},
                {"localview":"#/products#MG", "regionURL":"https://www.tarptiedown.com/components/components00_03/tmpl_02/ttd-vn-mg-not-complete-msg.html",    "product":"Mini Grabbit"},
                {"localview":"#/products#EZA", "regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-eza/index-eza.html",                                      "product":"EZ Adjust Rope Adjuster"},
                {"localview":"#/products#RB", "regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-rb/index-rb.html",                                        "product":"RockBuster Ground Stake"},
                {"localview":"#/products#BG", "regionURL":"https://www.tarptiedown.com/components/components04_07/tmpl_05/ttd-vn-bg-not-complete-msg.html",    "product":"Bag Grabbit Bag Handle"},
                {"localview":"#/products#KPR", "regionURL":"https://www.tarptiedown.com/components/components04_07/tmpl_06/ttd-vn-kpr-not-complete-msg.html",   "product":"EZ Grabbit Keeper"},
                {"localview":"#/products#CB", "regionURL":"https://www.tarptiedown.com/components/components04_07/tmpl_07/ttd-vn-cb-not-complete-msg.html",    "product":"Carry Bag"},
                {"localview":"#/products#TP", "regionURL":"https://www.tarptiedown.com/components/components08_11/tmpl_08/ttd-vn-tp-not-complete-msg.html",    "product":"Tent Poles"}
            ];
            productsSelf.quickLIST = quickLIST;
            
            // The toTop function is a workaround to alternate the target href so it always goes to the top should a scroll down be done and toTop() is clicked again. 

            var pickPageTop = true;
            productsSelf.toTop = function(){
                if(pickPageTop === true){
                    window.location.href="#/products#pageTop1";
                    pickPageTop = false;
                } 
                else {
                    window.location.href="#/products#pageTop2";
                    pickPageTop = true;
                };
            };
                
            // Response Section
            productsSelf.width1 = "width:" + ((-0.06118)*(viewWidth)+116.57647) + "%";          // AR_1170_45.00_320_97.00
            
            productsSelf.top1 = "top:" + ((0.00185)*(viewWidth)-0.16667) + "%";                 // AR_1170_2.00_360_0.50
             
            productsSelf.fontsize1 = "font-size:" + ((0.00043)*(viewWidth)+0.49444) + "em";     /* AR_1.00_0.65 */
            productsSelf.fontsize2 = "font-size:" + ((0.00062)*(viewWidth)+0.27778) + "em";     /* AR_1.00_0.50 */
            productsSelf.fontsize3 = "font-size:" + ((0.00041)*(viewWidth)+0.51824) + "em";     // AR_1170_1.00_320_0.65
           // productsSelf.fontsize4 = "font-size:" + ((0.00024)*(viewWidth)+0.97471) + "em";   // AR_1170_1.25_320_1.05
            
            
            productsSelf.padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px 5px";            /* AR_10.00_5.00 */
            productsSelf.borderwidth1 = "border-width:" + ((0.00118)*(viewWidth)+0.62353) + "px";       /* AR_2.00_1.05 */
            productsSelf.margin1 = "margin:" + ((0.00617)*(viewWidth)+2.77778) + "px 0px";              /* AR_10.00_5.00 */
            productsSelf.fontweight1 = "font-weight:" + ((-0.98765)*(viewWidth)+1255.55556);            /* AR_100.01_900.00 */
            
            viewManager.topMenuToHighlight(3);  
            
        }]
    })
    
    .component('reviews', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/testimonials.html',
        templateUrl: 'components/top_menu/reviews/testimonials.html',
        
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
            
            var reviewSelf = this;
            
            reviewSelf.fontsize1 = "font-size:" + ((0.00049)*(viewWidth)+0.42222) + "em";      /* AR_1.00_0.60 */
            reviewSelf.fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+1.19444) + "em";      // AR_1170_3.00_360_1.75
            
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
    
    