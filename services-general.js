angular.module("viewNav")

// viewManager handles requested views from non thumbnail and non history clicks.
.factory('viewManager', [ 'GetSet', function(GetSet){
            
    var getViewFromOtherClick = function(){};       // visible to whole factory  
    var topMenuHighlight = function(){};            // visible to whole factory
    
    return {
                            // ref1 receives the reference of the getViewFromOtherClick function in the controller scope.
                ref1:       function(getViewFromOtherClickRef){
                                getViewFromOtherClick = getViewFromOtherClickRef;
                            },
                
                            // fromProducts handles clicks from products menu in the top menu section
                fromProducts: function(view, group){
                                getViewFromOtherClick(view, group);
                            },
                            
                            // ref2 receives the reference of the topMenuToHighlight function
                ref2:       function(topMenuHighlightRef){
                                topMenuHighlight = topMenuHighlightRef; 
                            },
                            
                            // topMenuToHighlight handles which top menu item to highlight and set the getter setter setHighlightMode
                topMenuToHighlight: function(index){
                                GetSet.setHighlightMode("topMenu");
                                topMenuHighlight(index);
                            }
                            
    };
    
}])

// compFactory handles the view history menu. Note component controller calls are made to this among others.
.factory('compFactory', [ 'GetSet', function(GetSet){

    var getView = function(){};                     // visible to whole factory
    var viewDataArray = [];                         // visible to whole factory and is a cache
    var viewDataArrayElement = {};                  // visible to whole factory
    var enable = true;                              // visible to whole factory
    var clickSource = "";
    var startView = 0;                              // visible to whole factory 
    var leftArrowMode = "#cccccc";                  // visible to whole factory 
    var rightArrowMode = "#cccccc";                 // visible to whole factory 
    var historyArrowBtnMode =   {                   // visible to whole factory 
                                    leftArrowMode:  "",
                                    rightArrowMode: ""
                                };
    var testForDuplicate = [];
    var visibleBtnCnt = function(){                                 // visible to whole factory - Value is based on viewport width upon load    
                            var vpWidth = GetSet.getVpWidth();      // window.screen.availWidth;
                            var vpHeight = GetSet.getVpHeight();    // window.innerHeight;
                            var btnCnt;
                            
                            if(GetSet.getScreenMode() === "screen1" || GetSet.getScreenMode() === "screen2")
                                    btnCnt = Math.round((0.00741)*(vpWidth) + 1.33333);     // 4 btns at 320 - 10 btns at 1170
                            else if(GetSet.getScreenMode() === "screen3")
                                    btnCnt = Math.round(((0.02475)*(vpHeight) + -2.70792)); // 14 btns at height 675 - 19 btns at height 877
                            GetSet.setBtnCount(btnCnt);
                            return btnCnt;
                        }();                 
    
    return {
                // 'ref1' is called in the controller parent scope to pass the 'getView' method reference to here and be called here as a callback.
                // The 'getView' method manages the histoy list/menu
                ref1:       function(viewRef){
                                getView = viewRef;
                            },
                
                // enableHist is called here in the parent scope
                // when enable is true it adds to the view history menu because a thumbnail from the thumbnail group was clicked.
                // when enable is false it's because a view history menu item was clicked so no need to add to the view history menu.
                enableHist: function(enableBoolean){
                                enable = enableBoolean;
                            },
                
                // the logView function is called whenever a view is called and comes from its component controller
                // it will add to the view history menu when the enable variable is true.
                // The viewData variable will arrive as a number such as 3 for view 03. It gets turned into "view03" prior to departure. 
                logView:    function(viewData){
                                
                                // The three lines of test for duplicates code is a response to a problem with having two tag lines of "ui-view" 
                                // in the html code for the purposes of responsiveness. 
                                // Even though at any given time only one is shown using ng-show the "un shown"
                                // tag line of "ui-view" is somehow recognized as a viable view and is processed causing duplicate
                                // history buttons to show. The "un shown" view is indeed un shown but it's still picked up by the
                                // ui-router and processes the encounter. The testForDuplicate array and conditional below simply stops this 
                                // method execution if duplicates are detected. But it is not a fix I like and should be 
                                // considered a tech deficit because you should be able to disable a ui-view as needed in the HTML.
                                testForDuplicate.unshift(viewData);
                                testForDuplicate.splice(2);
                                if(testForDuplicate[0] === testForDuplicate[1]) {return;}

                                var groupNum = Math.floor((viewData/4)+1); // Calcualtes what group the view came from. < viewData >  is the component number and is the view number by assocaition.
                                var groupThumb = viewData%4;
                                
                                var groupNumConvertToASCII = "&#" + (groupNum + 64);
                                var textForHistoryBtn = groupNumConvertToASCII + "-" + (groupThumb+1);
                               
                                if(viewData <= 9){
                                    viewData = "view0" + viewData;
                                }
                                else {
                                    viewData = "view" + viewData;
                                }
                               
                                viewData = {view:viewData, 
                                            group:groupNum, 
                                            thumb:groupThumb, 
                                            btnShow:true,
                                            btnText:textForHistoryBtn};
                                
                                viewDataArrayElement = viewData;
                                
                                if(enable === true){ 
                                    
                                    viewDataArray.push(viewData);
                                    clickSource = "thumbClick";

                                    if(startView+(visibleBtnCnt) < viewDataArray.length) {
                                        startView = viewDataArray.length-(visibleBtnCnt);
                                        leftArrowMode = "black;";
                                    } 

                                    historyArrowBtnMode.leftArrowMode = leftArrowMode;
                                    historyArrowBtnMode.rightArrowMode = rightArrowMode;

                                    for(i=0; i<viewDataArray.length; i++){
                                        if(i < startView) viewDataArray[i].btnShow = false;
                                        if((i >= startView) && (i <= startView+visibleBtnCnt)) viewDataArray[i].btnShow = true;
                                        if(i > startView+visibleBtnCnt) viewDataArray[i].btnShow = false;
                                    }
                                }
                                else{
                                    clickSource = "historyClick";
                                }
                                
                                getView(viewDataArray, viewDataArrayElement, clickSource, historyArrowBtnMode);
                            },
                
                // Shifts left to expose the next viewHistory button to the left and disappears the right most viewHistory button            
                goLeft:     function(){
                                var showArrayAndBtnMode =   { 
                                                              viewDataArray:      [],
                                                              leftArrowMode:  "",
                                                              rightArrowMode: ""
                                                            };
                                if(startView > 0) startView--;
                                if(startView === 0) leftArrowMode = "#cccccc;";
                                if(startView+visibleBtnCnt < viewDataArray.length) rightArrowMode = "black;";
                                showArrayAndBtnMode.leftArrowMode = historyArrowBtnMode.leftArrowMode = leftArrowMode;
                                showArrayAndBtnMode.rightArrowMode = historyArrowBtnMode.rightArrowMode = rightArrowMode;
                                                                
                                for(i=0; i<viewDataArray.length; i++){
                                    if(i < startView) viewDataArray[i].btnShow = false;
                                    if((i >= startView) && (i < startView+visibleBtnCnt)) viewDataArray[i].btnShow = true;            
                                    if(i >= startView+visibleBtnCnt) viewDataArray[i].btnShow = false;                                
                                }
                                showArrayAndBtnMode.viewDataArray = viewDataArray;
                                return showArrayAndBtnMode;
                            },
                            
                // Shifts right to expose the next viewHistory button to the right and disappears the left most viewHistory button
                goRight:    function(){
                                var showArrayAndBtnMode =   { 
                                                              viewDataArray:      [],
                                                              leftArrowMode:  "",
                                                              rightArrowMode: ""
                                                            };
                                if(startView+visibleBtnCnt < viewDataArray.length) {
                                    rightArrowMode = "black;";
                                    startView++;
                                };
                                if(startView+visibleBtnCnt === viewDataArray.length) {rightArrowMode = "#cccccc;";};
                                if(startView !== 0) leftArrowMode = "black;";
                                showArrayAndBtnMode.leftArrowMode = historyArrowBtnMode.leftArrowMode = leftArrowMode;
                                showArrayAndBtnMode.rightArrowMode = historyArrowBtnMode.rightArrowMode = rightArrowMode;

                                for(i=0; i<viewDataArray.length; i++){
                                    if(i < startView) viewDataArray[i].btnShow = false;
                                    if((i >= startView) && (i < startView+visibleBtnCnt)) viewDataArray[i].btnShow = true;      
                                    if(i >= startView+visibleBtnCnt) viewDataArray[i].btnShow = false;                         
                                }
                                showArrayAndBtnMode.viewDataArray = viewDataArray;
                                return showArrayAndBtnMode;
                            },
        
                // Clears the history view except for the current view            
                clearView:  function(){
                                var length = viewDataArray.length;
                                viewDataArray.splice(0, length, viewDataArrayElement); // clear array and place current view at index position 0
                                historyArrowBtnMode.leftArrowMode = leftArrowMode = "#cccccc;";
                                historyArrowBtnMode.rightArrowMode = rightArrowMode = "#cccccc;";
                                startView = 0;
                                getView(viewDataArray, viewDataArray[0], "thumbClick", historyArrowBtnMode);
                                return viewDataArrayElement.group;   // return index (group) number so hyper index is updated reflecting current view. 
                            }  
    };                       
}]);