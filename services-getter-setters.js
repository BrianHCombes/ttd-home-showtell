angular.module("viewNav")

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
        VnData.menuConfig(styleCallback, "frameworkMenus");              // passes the reference of the 'styleCallback' function to the VnData service where HTTP calls are made.
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


}]);