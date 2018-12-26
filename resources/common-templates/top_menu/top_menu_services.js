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
                    
                    index = currentURL.search("index-lg.html");
                    if(index !== -1){
                        regionText.fill1 = "Long Grabbit region";
                        regionText.fill2 = "Long Grabbit region of pages";
                        regionText.fill3 = "LG Intro";
                        getText(regionText);  
                    };
                    
                    index = currentURL.search("index-mg.html");
                    if(index !== -1){
                        regionText.fill1 = "Mini Grabbit region";
                        regionText.fill2 = "Mini Grabbit region of pages";
                        regionText.fill3 = "Mini Grabbit";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search("index-eza.html");
                    if(index !== -1){
                        regionText.fill1 = "EZ Adjust region";
                        regionText.fill2 = "EZ Adjust region of pages";
                        regionText.fill3 = "EZA Intro";
                        getText(regionText); 
                    };

                    index = currentURL.search("index-rb.html");
                    if(index !== -1){
                        regionText.fill1 = "RockBuster region";
                        regionText.fill2 = "RockBuster region of pages";
                        regionText.fill3 = "RB Intro";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search("index-bg.html");
                    if(index !== -1){
                        regionText.fill1 = "Bag Grabbit region";
                        regionText.fill2 = "Bag Grabbit region of pages";
                        regionText.fill3 = "BG Intro";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search("index-kpr.html");
                    if(index !== -1){
                        regionText.fill1 = "Keeper region";
                        regionText.fill2 = "Keeper region of pages";
                        regionText.fill3 = "KPR Intro";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search("index-cb.html");
                    if(index !== -1){
                        regionText.fill1 = "Carry Bag region";
                        regionText.fill2 = "Carry Bag region of pages";
                        regionText.fill3 = "CB Intro";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search("index-tp.html");
                    if(index !== -1){
                        regionText.fill1 = "Tent Poles region";
                        regionText.fill2 = "Tent Poles region of pages";
                        regionText.fill3 = "TP Intro";
                        getText(regionText); 
                    };
                },50);
            }
        };
    }]);