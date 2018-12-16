angular.module("viewNav")

    .factory("topMenuService", [ function(){
            
        return {
            
            ttdRegionText: function(getText){
                
                setTimeout(function(){
                    var currentURL = window.location.href;
                    var regionText = {};
                    var index = "";

                    index = currentURL.search("#/ttd");
                    if(index !== -1){
                        regionText.fill1 = "TTD Home region";
                        regionText.fill2 = "Tarp Tie Down home region";
                        regionText.fill3 = "TTD Home";
                        getText(regionText); 
                    };

                    index = currentURL.search("index-ezg.html");
                    if(index !== -1){
                        regionText.fill1 = "EZ Grabbit";
                        regionText.fill2 = "EZ Grabit region of pages";
                        regionText.fill3 = "EZG Intro";
                        return regionText; 
                    };

                    index = currentURL.search("index-rb.html");
                    if(index !== -1){
                        regionText.fill1 = "RockBuster";
                        regionText.fill2 = "RockBuster region of pages";
                        regionText.fill3 = "RB Intro";
                        return regionText; 
                    };

                    index = currentURL.search("index-eza.html");
                    if(index !== -1){
                        regionText.fill1 = "EZ Adjust";
                        regionText.fill2 = "EZ Adjust region of pages";
                        regionText.fill3 = "EZA Intro";
                        return regionText; 
                    };
                
                },50);
            }
        };
    }]);