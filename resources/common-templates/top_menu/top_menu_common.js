angular.module("viewNav")

    .component('ttd', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/top_menu/ttd/ttd.html',
        templateUrl: 'resources/common-templates/top_menu/ttd/ttd.html',
       
        controller: ['$scope', 'GetSet', 'viewManager', 'topMenuService', function($scope, GetSet, viewManager, topMenuService){
            var viewWidth = GetSet.getViewWidth();
                
            var ttdSelf = this;
                        
            getText = function(regionText){
                $scope.$apply(function(){
                    ttdSelf.fill1 = regionText.fill1;
                    ttdSelf.fill2 = regionText.fill2;
                    ttdSelf.fill3 = regionText.fill3;
                    ttdSelf.fill4 = regionText.fill4;
                    ttdSelf.fill5 = regionText.fill5;
                    ttdSelf.fill6 = regionText.fill6;
                });
            };
            
            
            // Response Section 1
            ttdSelf.rs1fontsize1 = "font-size:" + ((0.00086)*(viewWidth)+0.48889) + "em";             /* AR_2.00_0.75 */
            ttdSelf.rs1fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+1.19444) + "em";             // AR_1170_3.00_360_1.75
            ttdSelf.rs1fontsize3 = "font-size:" + ((0.00031)*(viewWidth)+0.73889) + "em";             // AR_1170_1.10_360_0.85
            ttdSelf.rs1left1 = "left:" + ((0.05309)*(viewWidth)-17.11111) + "%";                      /* AR_45.00_2.00 */
            ttdSelf.rs1width1 = "width:" + ((-0.04706)*(viewWidth)+115.05882) + "%";                  // AR_1170_60.00_320_100.00
            
            topMenuService.ttdRegionText(getText);
            viewManager.topMenuToHighlight(1);    
        }]
    })

    .component('buyprice', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/top_menu/buy_price/buy_price.html',
        templateUrl: 'resources/common-templates/top_menu/buy_price/buy_price.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var buyPriceSelf = this;
            
            buyPriceSelf.title1 = "Select a product here or scroll down for the highest and lowest pack price. Then select \"Shop\" button for full price table.";
            buyPriceSelf.title2 = "Per device price for lowest pack size to highest pack size. Select here or scroll down for pack sizes. Then select \"Shop\" button for full price table.";
            buyPriceSelf.title3 = "This quick price menu provides the per device pricing from smallest to largest pack sizes.";
            buyPriceSelf.title4 = "Select this product here or scroll down for the highest and lowest pack price. Then select \"Shop\" button for full price table.";
            
            var quickLIST = [ 
                {"rowClass":"hyperMenuNav3",  "localview":"",                 "regionURL":"",                                                                                       "product":"&nbsp;Tarp Tie Downs",                                                   "price":""},
                {"rowClass":"",               "localview":"#/buyprice#EZGY",  "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_10_14",  "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Standard&nbsp;EZ&nbsp;Grabbit&nbsp;Yellow&nbsp;", "price":"&nbsp;start&nbsp;$2.72&nbsp;&#10140;&nbsp;low&nbsp;$1.93&nbsp;"},
                {"rowClass":"",               "localview":"#/buyprice#EZGBL", "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_10_11",  "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Standard EZ Grabbit Black&nbsp;",   "price":"&nbsp;start $2.72 &#10140; low $1.93&nbsp;"},
                {"rowClass":"",               "localview":"#/buyprice#EZGG",  "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_10_15",  "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Classic EZ Grabbit Green&nbsp;",    "price":"&nbsp;start $1.17 &#10140; low $1.02&nbsp;"},
                {"rowClass":"",               "localview":"#/buyprice#LG",    "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_13",     "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Long Grabbit&nbsp;",                "price":"&nbsp;start $7.96 &#10140; low $4.12&nbsp;"},
                {"rowClass":"",               "localview":"#/buyprice#MG",    "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_12",     "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Mini Grabbit&nbsp;",                "price":"&nbsp;start $2.02 &#10140; low $1.39&nbsp;"},
                {"rowClass":"",               "localview":"#/buyprice#KPR",   "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=8_10_16",  "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;EZ Grabbit Keeper&nbsp;",           "price":"&nbsp;start $2.95 &#10140; low $2.44&nbsp;"},
                
                {"rowClass":"hyperMenuNav2",  "localview":"",                 "regionURL":"",                                                                                       "product":"",                                                                       "price":""},
                {"rowClass":"hyperMenuNav3",  "localview":"",                 "regionURL":"",                                                                                       "product":"&nbsp;Rope Adjusters",                                                   "price":""},
                {"rowClass":"",               "localview":"#/buyprice#EZA",   "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=17",       "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;EZ Adjust Rope Adjuster&nbsp;",     "price":"&nbsp;start $0.73 &#10140; low $0.34&nbsp;"},
                
                {"rowClass":"hyperMenuNav2",  "localview":"",                 "regionURL":"",                                                                                       "product":"",                                                                       "price":""},
                {"rowClass":"hyperMenuNav3",  "localview":"",                 "regionURL":"",                                                                                       "product":"&nbsp;Ground Stakes",                                                    "price":""},
                {"rowClass":"",               "localview":"#/buyprice#RB",    "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=18",       "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;RockBuster Ground Stake&nbsp;",     "price":"&nbsp;$1.75 any Quantity&nbsp;"},
                
                {"rowClass":"hyperMenuNav2",  "localview":"",                 "regionURL":"",                                                                                       "product":"",                                                                       "price":""},
                {"rowClass":"hyperMenuNav3",  "localview":"",                 "regionURL":"",                                                                                       "product":"&nbsp;Bag Handle",                                                       "price":""},
                {"rowClass":"",               "localview":"#/buyprice#BG",    "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=19",       "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Bag Grabbit Bag Handle&nbsp;",      "price":"&nbsp;$4.26 any Quantity&nbsp;"},
                
                {"rowClass":"hyperMenuNav2",  "localview":"",                 "regionURL":"",                                                                                       "product":"",                                                                       "price":""},
                {"rowClass":"hyperMenuNav3",  "localview":"",                 "regionURL":"",                                                                                       "product":"&nbsp;Misc",                                                             "price":""},
                {"rowClass":"",               "localview":"#/buyprice#CB",    "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=20",       "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Carry Bag&nbsp;",                   "price":"&nbsp;$7.95 any Quantity&nbsp;"},
                {"rowClass":"",               "localview":"#/buyprice#TP",    "regionURL":"https://www.tarptiedown.com/TTD-Store-2018/index.php?rt=product/category&path=21",       "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Tent Pole Kit&nbsp;",               "price":"&nbsp;$7.95 any Quantity&nbsp;"}
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
            buyPriceSelf.fontsize3 = "font-size:" + ((0.00039)*(viewWidth)+0.54576) + "em";             // AR_1170_1.00_320_0.67
            buyPriceSelf.fontsize4 = "font-size:" + ((0.00185)*(viewWidth)+0.83333) + "em";             // AR_1170_3.00_360_1.50
            buyPriceSelf.fontsize5 = "font-size:" + ((0.00088)*(viewWidth)+0.46765) + "em";             // AR_1170_1.50_320_0.75
            
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
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/top_menu/products/products.html',
        templateUrl: 'resources/common-templates/top_menu/products/products.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var productsSelf = this;
            
            productsSelf.title1 = "Jumps to a short product overview in the listing below";
            productsSelf.title2 = "Full coverage of the product including detailed discussion, field applications, and specifications";
            productsSelf.title3 = "The quick menu takes you to the product overviews below or to the product application pages.";
            
            var quickLIST = [ 
                {"rowClass":"hyperMenuNav3",  "localview":"",                 "regionURL":"",                                                                                               "product":"&nbsp;Tarp Tie Downs"},
                {"rowClass":"",               "localview":"#/products#EZGY",  "regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-ezg/index-ezg.html",                                   "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Standard EZ Grabbit Yellow"},
                {"rowClass":"",               "localview":"#/products#EZGBL", "regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-ezg/index-ezg.html",                                   "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Standard EZ Grabbit Black"},
                {"rowClass":"",               "localview":"#/products#EZGG",  "regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-ezg/index-ezg.html",                                   "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Classic EZ Grabbit"},
                {"rowClass":"",               "localview":"#/products#LG",    "regionURL":"https://www.tarptiedown.com/components/components00_03/tmpl_01/ttd-vn-lg-not-complete-msg.html", "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Long Grabbit"},
                {"rowClass":"",               "localview":"#/products#MG",    "regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-mg/index-mg.html",                                     "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Mini Grabbit"},
                {"rowClass":"",               "localview":"#/products#KPR",   "regionURL":"https://www.tarptiedown.com/components/components04_07/tmpl_06/ttd-vn-kpr-not-complete-msg.html","product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;EZ Grabbit Keeper"},
                
                {"rowClass":"hyperMenuNav2",  "localview":"",                 "regionURL":"",                                                                                               "product":""},
                {"rowClass":"hyperMenuNav3",  "localview":"",                 "regionURL":"",                                                                                               "product":"&nbsp;Rope Adjusters"},
                {"rowClass":"",               "localview":"#/products#EZA",   "regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-eza/index-eza.html",                                   "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;EZ Adjust Rope Adjuster"},
                
                {"rowClass":"hyperMenuNav2",  "localview":"",                 "regionURL":"",                                                                                               "product":""},
                {"rowClass":"hyperMenuNav3",  "localview":"",                 "regionURL":"",                                                                                               "product":"&nbsp;Ground Stakes"},
                {"rowClass":"",               "localview":"#/products#RB",    "regionURL":"https://www.tarptiedown.com/ttd-vn/ttd-vn-rb/index-rb.html",                                     "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;RockBuster Ground Stake"},
                
                {"rowClass":"hyperMenuNav2",  "localview":"",                 "regionURL":"",                                                                                               "product":""},
                {"rowClass":"hyperMenuNav3",  "localview":"",                 "regionURL":"",                                                                                               "product":"&nbsp;Bag Handle"},
                {"rowClass":"",               "localview":"#/products#BG",    "regionURL":"https://www.tarptiedown.com/components/components04_07/tmpl_05/ttd-vn-bg-not-complete-msg.html", "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Bag Grabbit Bag Handle"},
                
                {"rowClass":"hyperMenuNav2",  "localview":"",                 "regionURL":"",                                                                                               "product":""},
                {"rowClass":"hyperMenuNav3",  "localview":"",                 "regionURL":"",                                                                                               "product":"&nbsp;Misc"},
                {"rowClass":"",               "localview":"#/products#CB",    "regionURL":"https://www.tarptiedown.com/components/components04_07/tmpl_07/ttd-vn-cb-not-complete-msg.html", "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Carry Bag"},
                {"rowClass":"",               "localview":"#/products#TP",    "regionURL":"https://www.tarptiedown.com/components/components08_11/tmpl_08/ttd-vn-tp-not-complete-msg.html", "product":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Tent Poles"}
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
            
            productsSelf.assignURL = function(url){
                window.location.assign(url);
            };
                
            // Response Section
            productsSelf.width1 = "width:" + ((-0.06118)*(viewWidth)+116.57647) + "%";          // AR_1170_45.00_320_97.00
            
            productsSelf.top1 = "top:" + ((0.00185)*(viewWidth)-0.16667) + "%";                 // AR_1170_2.00_360_0.50
             
            productsSelf.fontsize1 = "font-size:" + ((0.00043)*(viewWidth)+0.49444) + "em";     /* AR_1.00_0.65 */
            productsSelf.fontsize2 = "font-size:" + ((0.00062)*(viewWidth)+0.27778) + "em";     /* AR_1.00_0.50 */
            productsSelf.fontsize3 = "font-size:" + ((0.00041)*(viewWidth)+0.51824) + "em";     // AR_1170_1.00_320_0.65
            productsSelf.fontsize5 = "font-size:" + ((0.00088)*(viewWidth)+0.46765) + "em";     // AR_1170_1.50_320_0.75
            
            productsSelf.padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px 5px";            /* AR_10.00_5.00 */
            productsSelf.borderwidth1 = "border-width:" + ((0.00118)*(viewWidth)+0.62353) + "px";       /* AR_2.00_1.05 */
            productsSelf.margin1 = "margin:" + ((0.00617)*(viewWidth)+2.77778) + "px 0px";              // AR_1170_10.00_360_5.00
            productsSelf.fontweight1 = "font-weight:" + ((-0.98765)*(viewWidth)+1255.55556);            // AR_1170_100.01_360_900.00
            
            viewManager.topMenuToHighlight(3);  
            
        }]
    })
    
    .component('reviews', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/top_menu/reviews/testimonials.html',
        templateUrl: 'resources/common-templates/top_menu/reviews/testimonials.html',
        
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
            
            var reviewSelf = this;
            
            reviewSelf.fontsize1 = "font-size:" + ((0.00049)*(viewWidth)+0.42222) + "em";      /* AR_1.00_0.60 */
            reviewSelf.fontsize2 = "font-size:" + ((0.00154)*(viewWidth)+1.19444) + "em";      // AR_1170_3.00_360_1.75
            reviewSelf.fontsize3 = "font-size:" + ((-0.00206)*(viewWidth)+2.40644) + "em";     // AR_1170_0.00_360_1.67
            
            
            viewManager.topMenuToHighlight(4);  
            
        }]
    })
    
    .component('policy', {
        
        templateUrl: 'resources/common-templates/top_menu/policy_tmpl/policy.html',
       
        controller: ['GetSet', function(GetSet){
            var viewWidth = GetSet.getViewWidth();
            
        }]
    });
    
    