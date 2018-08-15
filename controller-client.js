angular.module('viewNav')
    .controller("VNCtrl", ['$scope', '$state', 'VnData', 'compFactory', 'GetSet', 'viewManager', function($scope, $state, VnData, compFactory, GetSet, viewManager){

        var vn = this;
        vn.hyperIndex;
        
//***********************************************************************************************************************************************************
// to see the loaded data brought in by function menuCallback see file: json-client.json Note: Name my change
// for styling configuration see factory "GetSet"
        menuCallback = function(data){
            vn.menuBar1 = data.menuBar1;        // is array
            vn.picMenu1 = data.picMenu1;        // is array of hyper menu items
            vn.picMenu2 = data.picMenu2;        // is array of hyper menu items
            vn.stateNAMES = data.stateNames;    // is array
        };
        VnData.menuConfig(menuCallback, "menus");

//***********************************************************************************************************************************************************
// arrayIndexPre is called from the button mouseovers/clicks on the hyper menu presentation for viewport widths below 900px. 
// This staggers the numbers for presentation and then calls the arrayIndex function. 
        vn.arrayIndexPre = function(index){
            var outGoingIndex = 0;
            if(index < 6){
                outGoingIndex = index*2;
            }
            else {
                outGoingIndex = (index-6)*2+1;
            }
            vn.arrayIndex(outGoingIndex);
        };
        
//***********************************************************************************************************************************************************
// function arrayIndex selects moused over hyper menu item and highlights it 
// and unhighlights the others. And shows the proper thumbnail group. 
        vn.arrayIndex = function(index){
            vn.hyperIndex = index;
            
            var selectedTextColor = GetSet.getTextColor1();
            var shadowForSelectedTextColor = GetSet.getShadowTextColor1();
            var unSelectedTextColor = GetSet.getTextColor2();
            var shadowForUnSelectedTextColor = GetSet.getShadowTextColor2();
            
            var boxShadow1 = GetSet.getBoxShadowColor1();
            var boxShadow2 = GetSet.getBoxShadowColor2();
            for(i=0; i<vn.stateNAMES.length; i++){
                if(index === i){vn.stateNAMES[i].showView = true;}
                else{vn.stateNAMES[i].showView = false;}
            }
            
            // This conditional unstaggers the index count that was staggered by function 
            // vn.arrayIndexPre above. It is strictly for purposes of highlighting 
            // the proper hyper menu button for the hyper menu presenation for viewports widths below 900px.
            if(GetSet.getScreenMode() === "screen2"){
                if(index % 2 === 0)index = index/2;
                else index = (index-1)/2+6;
            }
            
            // This ( if ) section applies proper highlights to the moused over or clicked on button (div) on the 
            // left side hyper menu. The ( else ) section handles the rigth side hyper menu.
            if(index < vn.picMenu1.length){
                for(i=0; i<vn.picMenu1.length; i++){
                    if(index === i){vn.picMenu1[i].highlight = selectedTextColor; 
                                    vn.picMenu1[i].shadow = shadowForSelectedTextColor; 
                                    vn.picMenu1[i].boxshadow = boxShadow1;}
                    else{   vn.picMenu1[i].highlight = unSelectedTextColor; 
                            vn.picMenu1[i].shadow = shadowForUnSelectedTextColor; 
                            vn.picMenu1[i].boxshadow = boxShadow2;}
                }
                for(i=0; i<vn.picMenu2.length; i++){
                    vn.picMenu2[i].highlight = unSelectedTextColor; 
                    vn.picMenu2[i].shadow = shadowForUnSelectedTextColor; 
                    vn.picMenu2[i].boxshadow = boxShadow2;
                }
            }
            else {
                for(i=0; i<vn.picMenu2.length; i++){
                    if((index-6) === i){vn.picMenu2[i].highlight = selectedTextColor; 
                                        vn.picMenu2[i].shadow = shadowForSelectedTextColor; 
                                        vn.picMenu2[i].boxshadow = boxShadow1;}
                    else{   vn.picMenu2[i].highlight = unSelectedTextColor; 
                            vn.picMenu2[i].shadow = shadowForUnSelectedTextColor; 
                            vn.picMenu2[i].boxshadow = boxShadow2;}
                }
                for(i=0; i<vn.picMenu1.length; i++){
                    vn.picMenu1[i].highlight = unSelectedTextColor; 
                    vn.picMenu1[i].shadow = shadowForUnSelectedTextColor; 
                    vn.picMenu1[i].boxshadow = boxShadow2;
                }
            };
            showCheckMark();
        };
        
//***********************************************************************************************************************************************************  
// The showCheckMark function determines which thumbnail image gets the indicator reflecting the current view.
        var showCheckMark = function(){
            var markerDownTriangle = GetSet.downMarker();
            var currentViewThumbFromThumbClick = GetSet.getThumbThumbClick();
            var currentViewHyperIndexFromThumbClick = GetSet.getHyperThumbClick();
            vn.checkMarkColor = GetSet.getTextColor1();
            
            if((currentViewThumbFromThumbClick === 0) && (currentViewHyperIndexFromThumbClick === vn.hyperIndex)){
                vn.showCheckA = markerDownTriangle;} else {vn.showCheckA = "&nbsp;";};
                       
            if((currentViewThumbFromThumbClick === 1) && (currentViewHyperIndexFromThumbClick === vn.hyperIndex)){
                vn.showCheckB = markerDownTriangle;} else{vn.showCheckB = "&nbsp;";};
            
            if((currentViewThumbFromThumbClick === 2) && (currentViewHyperIndexFromThumbClick === vn.hyperIndex)){
                vn.showCheckC = markerDownTriangle;} else{vn.showCheckC = "&nbsp;";};
            
            if((currentViewThumbFromThumbClick === 3) && (currentViewHyperIndexFromThumbClick === vn.hyperIndex)){
                vn.showCheckD = markerDownTriangle;} else{vn.showCheckD = "&nbsp;";};  
        };
        
//***********************************************************************************************************************************************************        
// topMenuHighlight highlights the clicked upon top menu item. The selected template sends it's index to the 'viewManager' service which then invokes the
// topMenuHighlight function and returns the index value here and is then compared to the indices of the array of items and highlights the matching item.
        var topMenuHighlight = function(index){
            
            if(GetSet.getHighlightMode() === "topMenu"){
                highlightManager("topMenu");
                for(i=0; i<vn.menuBar1.length; i++){
                    if(i === index){
                        vn.menuBar1[i].highlight = "#00ffff";}
                    else {
                        vn.menuBar1[i].highlight = "white";};
                }
            }
            else {
                for(i=0; i<vn.menuBar1.length; i++){
                    vn.menuBar1[i].highlight = "white";
                };
            }
        };
        
        viewManager.ref2(topMenuHighlight);
        
//***********************************************************************************************************************************************************            
// receiveData serves as a callback function and retrieves all thumbnail image files names from the db. Setting vn.hyperIndex = 0 shows the first group of thumbnails on load.
        var receiveData =   function(data){
                                $scope.$apply(function(){vn.showPicObj = data; vn.hyperIndex = 0;});
                            };
        VnData.rbGetPicsAjax(receiveData);
        
// **********************************************************************************************************************************************************
// getView serves as a callback function and manages the history list and also sets which thumbnail checkmark should show in correspondance to the selected thumbnail.
        var getView  =  function(viewDataArray, viewDataArrayElement, clickSource, historyArrowBtnMode){
                            var bkgndColor = [];    // Contents stay intact for the next return call. But make sure it's not just luck.
                            var color1 = GetSet.getBkgndColor1();
                            var color2 = GetSet.getBkgndColor2();
                                 
                            vn.currentView = viewDataArray;
                            vn.leftArrowBtnMode = historyArrowBtnMode.leftArrowMode;
                            vn.rightArrowBtnMode = historyArrowBtnMode.rightArrowMode;
                            
                            if(clickSource === "thumbClick"){
                                // The for loop and ensuing < vn.bkColor = bkgndColor; > assignment highlight the current view's history button from a thumb click
                                for(i=0; i<vn.currentView.length; i++){
                                    if((i+1) === vn.currentView.length){
                                        bkgndColor.push(color1);
                                    }
                                    else{
                                        bkgndColor.push(color2);
                                    }
                                }    
                                vn.bkColor = bkgndColor;
                               
                                console.log("viewDataArray is: " + JSON.stringify(viewDataArray));
                                console.log("viewDataArray[viewDataArray.length-1].thumb is: " + viewDataArray[viewDataArray.length-1].thumb);
                                GetSet.setThumbThumbClick(viewDataArray[viewDataArray.length-1].thumb);      // Used to show checkmark for selected thumbnail
                                GetSet.setHyperThumbClick(viewDataArray[viewDataArray.length-1].group - 1);  // Used to show checkmark for selected thumbnail
                                vn.arrayIndex(viewDataArray[viewDataArray.length-1].group-1);                // Highlights the proper hyper index button when a thumbnail is selected upon page opening
                            }
                            else if(clickSource === "historyClick"){
                                // The for loop and ensuing < vn.bkColor = bkgndColor; > assignment highlight the current view's history button from a view history click
                                for(i=0; i<vn.currentView.length; i++){
                                    if(vn.currentView[i].view === (viewDataArrayElement.view)){
                                         bkgndColor[i] = color1;
                                    }
                                    else{
                                        bkgndColor[i] = color2;
                                    }
                                }
                                vn.bkColor = bkgndColor;
                                GetSet.setThumbThumbClick(viewDataArrayElement.thumb);
                                GetSet.setHyperThumbClick(viewDataArrayElement.group - 1);
                            }
                            highlightManager("thumbOrHist");
                            showCheckMark();
                        };
        compFactory.ref1(getView);
        
//***********************************************************************************************************************************************************        
// This is the highlight manager which manages what menus and thumbnails should have a highlighted item.        
        function highlightManager(highlightCaller){
            
            if(highlightCaller === "thumbOrHist"){
                GetSet.setHighlightMode(highlightCaller);
                topMenuHighlight(0);
            }
            if(highlightCaller === "topMenu"){
                
                // Removes highlight from the history menu when top menu item picked
                if(vn.bkColor !== undefined){                       
                    for(i=0; i<vn.bkColor.length; i++){
                          vn.bkColor[i] = GetSet.getBkgndColor2(); 
                    }
                }
                
                // Removes highlight from hyper menu when top menu item picked. See arrayIndex() function
                var unSelectedTextColor = GetSet.getTextColor2();
                var shadowForUnSelectedTextColor = GetSet.getShadowTextColor2();
                var boxShadow2 = GetSet.getBoxShadowColor2();
                for(i=0; i<vn.picMenu1.length; i++){
                    vn.picMenu1[i].highlight = unSelectedTextColor; 
                    vn.picMenu1[i].shadow = shadowForUnSelectedTextColor; 
                    vn.picMenu1[i].boxshadow = boxShadow2;
                };
                for(i=0; i<vn.picMenu2.length; i++){
                    vn.picMenu2[i].highlight = unSelectedTextColor; 
                    vn.picMenu2[i].shadow = shadowForUnSelectedTextColor; 
                    vn.picMenu2[i].boxshadow = boxShadow2;
                };
                
                // Removes checkmark (down pointing triangle) from the thumbnails when top menu item picked. See showCheckMark() function.
                vn.showCheckA = "&nbsp;";
                vn.showCheckB = "&nbsp;";
                vn.showCheckC = "&nbsp;";
                vn.showCheckD = "&nbsp;";
            }
        }
        
//***********************************************************************************************************************************************************    
// This method grays or blacks the left and right history arrow buttons and updates which history buttons should be shown.
        vn.historyBtnOp = function(btnOp){
            
            var showArrayAndBtnMode = {};
            
            if(btnOp === "left"){
                showArrayAndBtnMode = compFactory.goLeft();
                vn.currentView = showArrayAndBtnMode.viewDataArray;
                vn.leftArrowBtnMode = showArrayAndBtnMode.leftArrowMode;
                vn.rightArrowBtnMode = showArrayAndBtnMode.rightArrowMode;
            }
            
            if(btnOp === "right"){
                showArrayAndBtnMode = compFactory.goRight();
                vn.currentView = showArrayAndBtnMode.viewDataArray;
                vn.leftArrowBtnMode = showArrayAndBtnMode.leftArrowMode;
                vn.rightArrowBtnMode = showArrayAndBtnMode.rightArrowMode;
            }
        };
        
// **********************************************************************************************************************************************************
// The stateHistory function shows the proper view clicked from the view history menu but does not add to the view history menu    
        vn.stateHistory = function(viewHistory){
            
            //alert("viewHistory is" + JSON.stringify(viewHistory));
            console.log(JSON.stringify(viewHistory));
            if(GetSet.getHighlightMode() === "topMenu"){    // Re-highlights the last history button if clicked and previous was a topMenu item.
                vn.bkColor[vn.bkColor.length-1] = GetSet.getBkgndColor1();
                highlightManager("thumbOrHist");
            };
            compFactory.enableHist(false);                  // Tells compFactory service to disable adding a view history item.
            vn.arrayIndex(viewHistory.group-1);             // Selects and highlights the proper hyper menu item      
            $state.go(viewHistory.view);                    // displays the selected view and also starts the chain reaction by routing to the associated component.
            setTimeout(function(){
                compFactory.enableHist(true);               // re-enables ability to add view history items. Delay is OK and callback not needed.
            },100);
        };  

//***********************************************************************************************************************************************************            
// The clearHistory function clears the history menu and leaves the most recently visited view.
        vn.clearHistory = function(){
            var currentViewIndex = compFactory.clearView();
            vn.arrayIndex(currentViewIndex-1);              // Selects and highlights the current view after the previous view history is cleared 
        };

       
//***********************************************************************************************************************************************************
// This getViewFromOtherClick function handles clicks from any non history and non thumbnail clicks. It then displays the proper view and thumbnail group
        var getViewFromOtherClick = function(view, group){
            vn.arrayIndex(group-1);             // Selects and highlights the proper hyper menu item and thumbnail group     
            $state.go(view); 
        };    
        
        viewManager.ref1(getViewFromOtherClick); // Passes the reference of the getViewFromOtherClick function to the factory service 'viewManager'on load.
        
            
//***********************************************************************************************************************************************************            
// $state.go('some-view') loads the desired view as the default view upon load               
        var stateGo = (function(){    
            $state.go('intro');
/*             
                // Use this setTimeout if intializing with a template. If you initialize with a template only the first thumbnail group will show properly. If
                // it's a template (view04 and up) then the proper thumbnail group won't show unless you call the stateHistory method and send it the proper parameters
                setTimeout(function(){ 
                    var viewHistory = {                         
                                        "view":"view08",
                                        "group":3,          
                                        "thumb":1
                                      };  
                    vn.stateHistory(viewHistory);
                },3000);
*/
            }());
 
//***********************************************************************************************************************************************************    
//  Responsive section for the Hyper Menu and Thumbnail section     

//  Responsive function: This sets which HTML screen will show.  
    function screenSelect(){
        
        if(GetSet.getScreenMode() === "screen1"){
            vn.screen1 = true;
            vn.screen2 = false;
            vn.screen3 = false;
        }
        else if(GetSet.getScreenMode() === "screen2") {
            vn.screen1 = false;
            vn.screen2 = true;
            vn.screen3 = false;
        }
        else if(GetSet.getScreenMode() === "screen3") {
            vn.screen1 = false;
            vn.screen2 = false;
            vn.screen3 = true;
        };
        // This section is for (screen2 = true) and should be moved to the screenResponse function - Tech Deficit  
        var vpWidth = GetSet.getVpWidth();  //window.screen.availWidth;
        if(vpWidth >= 650) vpWidth = 650;
        vn.btnFontSize = ((0.01379)*(vpWidth) + 7.03448) + "px";
        vn.margin1 = ((-0.00882)*(vpWidth) + 16.17647) + "px";

        if(vpWidth <= 650 && vpWidth >= 500){
            vn.padding1 = "9px";
            vn.width1 = (vpWidth*.97) + "px";
            
            vn.width2 = ((-0.06667)*(vpWidth) + 73.33333) + "%";
            vn.width3 = ((-0.06667)*(vpWidth) + 73.33333) + "%";
            vn.width4 = ((0.06667)*(vpWidth) + -23.33333) + "%";
            vn.width5 = ((0.06667)*(vpWidth) + -23.33333) + "%";
        }
        else {
            vn.padding1 = ((0.05036)*(vpWidth) + -16.12950) + "px";
            vn.width1 = "100%";
            vn.width2 = "40%";
            vn.width3 = "40%";
            vn.width4 = "10%";
            vn.width5 = "10%";
        };
    } 
    screenSelect();
    
//***********************************************************************************************************************************************************     
//  Responsive function: screenResponse is for all screen responsive needs 
    function screenResponse(){
        
        var vpWidth = GetSet.getVpWidth(); // window.screen.availWidth;
        var vpHeight = GetSet.getVpHeight(); 
        if(vpWidth > 1170) vpWidth = 1170;

        vn.response = { 
                                fontsize01: "font-size:" + ((0.00494)*(vpWidth) + 10.22222)+"px",
                                fontsize02: "font-size:" + ((0.00046)*(vpWidth) + 0.95833)+"em",
                                fontsize03: "font-size:" + ((0.00025)*(vpWidth) + 0.91111)+"em",
                                fontsize04: "font-size:" + ((0.01605)*(vpWidth) + 5.22222)+"px",
                                fontsize05: "font-size:" + ((0.00043)*(vpWidth) + 0.64444)+"em",

                                margin01:   "margin:0px " + ((0.00370)*(vpWidth) - 1.33333)+"px",

                                padding01:  "padding:" + "0px " + ((0.01235)*(vpWidth) + -4.44444)+"px" + " 0px " + ((0.01235)*(vpWidth) + -4.44444)+"px",
                                padding02:  "padding:" + ((0.00247)*(vpWidth) + 2.11111) + "px",
                                padding03:  "padding:" + "0px " + ((0.00617)*(vpWidth) + 2.77778)+"px",
                                padding04:  "padding:" + ((0.00494)*(vpWidth) + -1.77778) + "px" + " 2px",
                                padding05:  "padding:" + "0px " + ((0.00617)*(vpWidth) + 2.77778)+"px" + " 0px " + ((0.01235)*(vpWidth) + -4.44444)+"px",
                                padding06:  "padding:" + "0px " + ((0.00824)*(vpWidth) + 0.36471)  + "px",
                                padding07:  "padding:" + ((0.01111)*(vpWidth) + -8.00000)+"px" + " 0px",    // 5 at 1170, 2 at 900 // for screen1
                                padding08:  "padding:" + ((0.03971)*(vpHeight) + -14.82671)+"px" + " 0px",  // 9 at 600, 20 at 877 // for screen3 height

                                width01:    "width:" + 99/(GetSet.getBtnCount()) + "%",                     // sizes the view history buttons to fit 97% of the available space
                                width02:    "width:" + ((0.01235)*(vpWidth) + 63.55556)+"%",
                                width03:    "width:" + ((-0.01605)*(vpWidth) + 27.77778)+"%",
                                width04:    "width:" + ((-0.00494)*(vpWidth) + 13.77778)+"%",
                                width05:    "width:" + ((0.31769)*(vpHeight) + -8.61372)+"px",              // 204 at 600, 270 at 877 // <td> width for thumbnail column for screen3
                                width06:    "width:" + ((-0.31769)*(vpHeight) + 991.61372)+"px",            // 713 at 877, 801 at 600 // <td> width of view template as a function of height // used in screen 3

                                height01:   "height:" + ((0.01852)*(vpWidth) + 6.33333)+"px",               // 28 at 1170, 13 at 360  // Top Menu
                                height02:   "height:" + (function(){        
                                                            if(vpWidth >= 900){
                                                                return vpHeight - ((0.01852)*(vpWidth) + 6.33333) 
                                                                                - ((0.21111)*(vpWidth) + -22.00000) 
                                                                                - ((0.01728)*(vpWidth) + 15.77778)
                                                                                - vpHeight*.05;
                                                            } 
                                                            else if(vpWidth <= 899 && vpWidth >= 500){
                                                                return vpHeight - 306
                                                                                - ((0.01852)*(vpWidth) + 6.33333)
                                                                                - ((0.01728)*(vpWidth) + 15.77778)
                                                                                - vpHeight*.05;
                                                            }
                                                            else if(vpWidth <= 499){
                                                                return vpHeight - ((0.61871)*(vpWidth) + -3.73381)
                                                                                - ((0.01852)*(vpWidth) + 6.33333)
                                                                                - ((0.01728)*(vpWidth) + 15.77778)
                                                                                - vpHeight*.05; 
                                                            }
                                                        }()) +"px",
                                height03:   "height:" + ((0.17407)*(vpWidth) + -18.66667)+"px",
                                height04:   "height:" + ((0.21111)*(vpWidth) + -22.00000)+"px",
                                height05:   "height:" + ((0.01728)*(vpWidth) + 15.77778)+"px",      // 36 at 1170, 22 at 360 // History Menu height screen1 and screen2
                                height06:   "height:" + (function(){
                                                            if(vpWidth <= 899 && vpWidth >= 500){
                                                                return 306;}
                                                            else {
                                                                return ((0.61871)*(vpWidth) + -3.73381);}
                                                        }()) +"px",
                                height07:   "height:" + ((0.89109)*(vpHeight) + 13.51485)+"px",     // History Menu height screen3
                                height08:   "height:" + ((0.93863)*(vpHeight) + -13.17690)+"px",
                                
                                top01:      "top:" + ((0.89109)*(vpHeight) + -61.48515)+"px",       // Arrow buttons screen3
                                
                                vpHeight:   vpHeight
                                };
    } 
    screenResponse();
}])

//***********************************************************************************************************************************************************
// GetSet is designed as a closure function. See AA - ReadMe.txt 11/26/2017 for discussion
// "C:\xampp\htdocs\Project-TTD-Website-Rock-Buster-LAMP\AA - ReadMe.txt"
.factory('GetSet', ['VnData', function(VnData){
        
        var markerDownTriangle = "";
        var markerLeftTriangle = "";
        var markerRightTriangle = "";

        var bkgndColor1 = "";
        var bkgndColor2 = "";
        
        var textColor1 = "";
        var shadowTextColor1 = "";
        
        var textColor2 = "";
        var shadowTextColor2 = "";
        
        var boxShadowColor1 = "";
        var boxShadowColor2 = "";
        
        var currentViewThumbFromThumbClick;
        var currentViewHyperIndexFromThumbClick;
        
        var highlightMode = "";
        
        var styleCallback = function(data){                     // Called from the VnData factory/service.
/*             
            textColor1 = data.picMenu1[0].highlight;            // default initialize for selected text highlight on hyper menu, checkmark and history menu
            bkgndColor1 = data.picMenu1[0].highlight;           // default initialize for selected text highlight on hyper menu, checkmark and history menu
            shadowTextColor1 = data.picMenu1[0].shadow;         // default initialize for selected text highlight on hyper menu, checkmark and history menu
            textColor2 = data.picMenu1[1].highlight;            // default initialize for selected text highlight on hyper menu, checkmark and history menu
            shadowTextColor2 = data.picMenu1[1].shadow;         // default initialize for selected text highlight on hyper menu, checkmark and history menu
            
            boxShadowColor1 = data.picMenu1[0].boxshadow; 
            boxShadowColor2 = data.picMenu1[1].boxshadow; 
*/
            
            textColor1 = data.selectedStyle.highlight;          // default initialize for selected text highlight on hyper menu, checkmark and history menu
            bkgndColor1 = data.selectedStyle.highlight;         // default initialize for selected text highlight on hyper menu, checkmark and history menu
            bkgndColor2 = data.selectedStyle.background;        // default initialize for selected text highlight on hyper menu, checkmark and history menu
            shadowTextColor1 = data.selectedStyle.shadow;       // default initialize for selected text highlight on hyper menu, checkmark and history menu
            textColor2 = data.picMenu1[1].highlight;            // default initialize for selected text highlight on hyper menu, checkmark and history menu
            shadowTextColor2 = data.picMenu1[1].shadow;         // default initialize for selected text highlight on hyper menu, checkmark and history menu
            
            boxShadowColor1 = data.selectedStyle.boxshadow; 
            boxShadowColor2 = data.picMenu1[1].boxshadow; 
            
            markerDownTriangle = data.styling[0].downtriangle;                  // Triangle symbol pointing down to imdicate which view is selected
            markerLeftTriangle = data.styling[1].lefttriangle;                  // Triangle symbol pointing down to imdicate which view is selected
            markerRightTriangle = data.styling[1].righttriangle;                // Triangle symbol pointing down to imdicate which view is selected
        };
        
        var btnCount = 0;
        VnData.menuConfig(styleCallback, "menus");              // passes the reference of the 'styleCallback' function to the VnData service where HTTP calls are made.
        var screenMode = "screen1";
        var viewWidth;
        var vpWidth = window.screen.availWidth;
        var vpHeight = window.innerHeight;
        
        if(vpWidth > 1170) vpWidth = 1170;
        
        if(vpWidth >= 900 && (vpHeight/vpWidth >= 0.75)){
            screenMode = "screen1";
            viewWidth = vpWidth;
        }
        else if(vpWidth < 900) {
            screenMode = "screen2";
            viewWidth = vpWidth;
        }
        else if(vpWidth >= 900 && (vpHeight/vpWidth < 0.75)) {
            screenMode = "screen3";
            viewWidth = ((-0.31769)*(vpHeight) + 991.61372);                        // In coordination with the other elements per screen3 - see screenResponse(); 
        }
        
        return  {
            
            getHighlightMode: function(){return highlightMode;},
            setHighlightMode: function(value){highlightMode = value;},

            downMarker: function(){return markerDownTriangle;},                        
            setMarkerType1: function(value){markerDownTriangle = value;},           // not used
            
            getLeftMarker: function(){return markerLeftTriangle;},                        
            setLeftMarker: function(value){markerLeftTriangle = value;},            // not used
            
            getRightMarker: function(){return markerRightTriangle;},                        
            setRightMarker: function(value){markerRightTriangle = value;},          // not used
            
            getBkgndColor1: function(){return bkgndColor1;},                         
            setBkgndColor1: function(value){bkgndColor1 = value;},                  // not used
            
            getBkgndColor2: function(){return bkgndColor2;},
            setBkgndColor2: function(value){bkgndColor2 = value;},                  // not used
           
            getTextColor1: function(){return textColor1;},
            setTextColor1: function(value){textColor1 = value;},                    // not used               
            
            getShadowTextColor1: function(){return shadowTextColor1;},
            setShadowTextColor1: function(value){shadowTextColor1 = value;},        // not used
            
            getTextColor2: function(){return textColor2;},
            setTextColor2: function(value){textColor2 = value;},                    // not used
            
            getShadowTextColor2: function(){return shadowTextColor2;},
            setShadowTextColor2: function(value){shadowTextColor2 = value;},        // not used
            
            getBoxShadowColor1: function(){return boxShadowColor1;},
            getBoxShadowColor2: function(){return boxShadowColor2;},
            
            getThumbThumbClick: function(){return currentViewThumbFromThumbClick;},
            setThumbThumbClick: function(value){currentViewThumbFromThumbClick = value;},
            
            getHyperThumbClick: function(){return currentViewHyperIndexFromThumbClick;},
            setHyperThumbClick: function(value){currentViewHyperIndexFromThumbClick = value;},
            
            getBtnCount: function(){return btnCount;},
            setBtnCount: function(value){btnCount = value;},   
            
            getScreenMode:  function(){return screenMode;},
            setScreenMode:  function(value){screenMode = value;},
                            
            getVpWidth:     function(){return vpWidth;},
            getVpHeight:    function(){return vpHeight;},
            getViewWidth:   function(){return viewWidth;}
        };


}])

//***********************************************************************************************************************************************************
// The factory service VnData retrieves menu configuration data from a local JSON file and image file names from MySQL DB
.factory('VnData', ['$http', function($http){
   
            return  {
          
                rbGetPicsAjax:  function(receiveData){
                                    var picArray = [];
                                        var xhttp = new XMLHttpRequest();
                                        xhttp.onreadystatechange = function() {
                                            if(xhttp.readyState == 4){
                                            }    
                                            if (xhttp.readyState == 4 && xhttp.status == 200) {
                                                picArray = xhttp.responseText;  
                                                if(picArray.length <= 2)
                                                    alert("Query unsucessful");
                                                picArray = JSON.parse(picArray);
                                                var vnData = picArray;
                                                receiveData(vnData);
                                            }
                                        };
                                        xhttp.open("GET", "server.php?q=queryTest", true);
                                        xhttp.send();
                                },
                        
                menuConfig: function(menuCallbackRef, menuToPopulate){
                                switch(menuToPopulate){
                                    case "menus":   return $http.get('json-client.json', { cache: true }).then(function(resp) {
                                                        menuCallbackRef(resp.data);
                                                    });
                                                    break;
                                }
                            }        
            };
}])

//***********************************************************************************************************************************************************
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

//***********************************************************************************************************************************************************
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

