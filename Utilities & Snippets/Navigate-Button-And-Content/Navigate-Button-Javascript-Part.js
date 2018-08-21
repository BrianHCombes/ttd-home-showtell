// Note: not all response properties used that are shown here.
introSelf.rs3fontsize1 = "font-size:" + ((0.00095)*(viewWidth)+0.38778) + "em";        /* AR_1.50_0.73 */
introSelf.rs3fontsize2 = "font-size:" + ((0.00105)*(viewWidth)+0.27222) + "em";        /* AR_1.50_0.65 */
introSelf.rs3top1 = "top:" + ((0.01852)*(viewWidth)+8.33333) + "px";                   /* AR_30.00_15.00 */      
introSelf.rs3marginleft1= "margin-left:" + ((0.01852)*(viewWidth)-1.66667) + "px";     /* AR_20.00_5.00 */
introSelf.rs3padding1 = "padding:" + ((0.00617)*(viewWidth)+2.77778) + "px " + ((0.01235)*(viewWidth)+5.55556) + "px";    /* AR_10.00_5.00 */ /* AR_20.01_10.00 */


// Sets mode of the "NAVIGATE" button
introSelf.display2 = false;
introSelf.morelessText2 = "NAVIGATE";
introSelf.moreless2 = function(){
    if(introSelf.morelessText2 === "NAVIGATE"){
        introSelf.morelessText2 = "HIDE NAVIGATE";
        introSelf.display2 = true;
    } 
    else {
        introSelf.morelessText2 = "NAVIGATE";
        introSelf.display2 = false;
    }
}; 
introSelf.navMenuHeader = NavMenuFactory.navMenuHeader();
introSelf.navMenuBody = NavMenuFactory.getViewNav(1);


// Angular factory module part
angular.module("viewNav")

    .factory("NavMenuFactory", [ function(){
            
        return {
            
                navMenuHeader:  function(){
                    var header = {"col1":"SELECTION", "col2":"DESTINATION", "msg":"you are here"};
                    return header;
                },    

                getViewNav: function(location){

                    var navMenu = 
                    [           
                        {"rowClass":"topMenuNav",   "selection":"Home/?",               "destination":"TTD home button, nav info"},
                        {"rowClass":"topMenuNav",   "selection":"LG Intro",             "destination":"Long Grabbit Introduction"},
                        {"rowClass":"topMenuNav",   "selection":"Price/Buy",            "destination":"Prices and Shopping"},
                        {"rowClass":"topMenuNav",   "selection":"Products",             "destination":"General product descriptions"},
                        {"rowClass":"topMenuNav",   "selection":"Reviews",              "destination":"Customer reviews"},
                        {"rowClass":"hyperMenuNav", "selection":"Button-A-Thumb-1",    "destination":"LG Stuff"},
                        {"rowClass":"hyperMenuNav", "selection":"Button A Thumb 2",    "destination":"LG Stuff"},
                        {"rowClass":"hyperMenuNav", "selection":"Button A Thumb 3",    "destination":"LG Stuff"},
                        {"rowClass":"hyperMenuNav", "selection":"Button A Thumb 4",    "destination":"LG Stuff"}
                    ];
                    navMenu[location].rowClass = "youAreHere";
                    return navMenu;
                }
        };
}]);