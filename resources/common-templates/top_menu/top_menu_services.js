angular.module("viewNav")

    .factory("topMenuService", [ function(){
            
        return {
            
            ttdRegionText: function(getText){
                
                setTimeout(function(){
                    var currentURL = window.location.href;
                    var regionText = {};
                    var index = "";

                    index = currentURL.search("index.html#/ttd");
                    if(index !== -1){
                        regionText.fill1 = "TTD Home region";
                        regionText.fill2 = "Tarp Tie Down home region";
                        regionText.fill3 = "TTD Home";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search(".com/#/ttd");
                    if(index !== -1){
                        regionText.fill1 = "TTD Home region";
                        regionText.fill2 = "Tarp Tie Down home region";
                        regionText.fill3 = "TTD Home";
                        getText(regionText); 
                    };

                    index = currentURL.search("index-ezg.html");
                    if(index !== -1){
                        regionText.fill1 = "EZ Grabbit region";
                        regionText.fill2 = "EZ Grabbit region of pages";
                        regionText.fill3 = "EZG Intro";
                        getText(regionText);  
                    };

                    index = currentURL.search("index-rb.html");
                    if(index !== -1){
                        regionText.fill1 = "RockBuster region";
                        regionText.fill2 = "RockBuster region of pages";
                        regionText.fill3 = "RB Intro";
                        getText(regionText); 
                    };

                    index = currentURL.search("index-eza.html");
                    if(index !== -1){
                        regionText.fill1 = "EZ Adjust region";
                        regionText.fill2 = "EZ Adjust region of pages";
                        regionText.fill3 = "EZA Intro";
                        getText(regionText); 
                    };
                
                },50);
            }
        };
    }]);