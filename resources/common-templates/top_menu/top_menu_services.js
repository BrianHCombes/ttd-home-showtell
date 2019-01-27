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
                        regionText.fill1 = "TTD Home vicinity";
                        regionText.fill2 = "Tarp Tie Down home vicinity";
                        regionText.fill3 = "TTD Home";
                        regionText.fill4 = "TTD HOME VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO THIS PAGE";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search(".com/#/ttd");
                    if(index !== -1){
                        regionText.fill1 = "TTD Home vicinity";
                        regionText.fill2 = "Tarp Tie Down home vicinity";
                        regionText.fill3 = "TTD Home";
                        regionText.fill4 = "TTD HOME VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO THIS PAGE";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search(".com/?");
                    if(index !== -1){
                        regionText.fill1 = "TTD Home vicinity";
                        regionText.fill2 = "Tarp Tie Down home vicinity";
                        regionText.fill3 = "TTD Home";
                        regionText.fill4 = "TTD HOME VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO THIS PAGE";
                        getText(regionText); 
                    };
                                        
                    index = currentURL.search("index-ezg.html");
                    if(index !== -1){
                        regionText.fill1 = "EZ Grabbit vicinity";
                        regionText.fill2 = "EZ Grabbit vicinity of pages";
                        regionText.fill3 = "EZ Grabbit";
                        regionText.fill4 = "EZ GRABBIT VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO, APPS, SPECS";
                        getText(regionText);  
                    };
                    
                    index = currentURL.search("index-lg.html");
                    if(index !== -1){
                        regionText.fill1 = "Long Grabbit vicinity";
                        regionText.fill2 = "Long Grabbit vicinity of pages";
                        regionText.fill3 = "Long Grabbit";
                        regionText.fill4 = "LONG GRABBIT VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO, APPS, SPECS";
                        getText(regionText);  
                    };
                    
                    index = currentURL.search("index-mg.html");
                    if(index !== -1){
                        regionText.fill1 = "Mini Grabbit vicinity";
                        regionText.fill2 = "Mini Grabbit vicinity of pages";
                        regionText.fill3 = "Mini Grabbit";
                        regionText.fill4 = "MINI GRABBIT VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO, APPS, SPECS";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search("index-eza.html");
                    if(index !== -1){
                        regionText.fill1 = "EZ Adjust vicinity";
                        regionText.fill2 = "EZ Adjust vicinity of pages";
                        regionText.fill3 = "EZ Adjust";
                        regionText.fill4 = "EZ ADJUST VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO, APPS, SPECS";
                        getText(regionText); 
                    };

                    index = currentURL.search("index-rb.html");
                    if(index !== -1){
                        regionText.fill1 = "RockBuster vicinity";
                        regionText.fill2 = "RockBuster vicinity of pages";
                        regionText.fill3 = "RockBuster";
                        regionText.fill4 = "ROCKBUSTER VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO, APPS, SPECS";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search("index-bg.html");
                    if(index !== -1){
                        regionText.fill1 = "Bag Grabbit vicinity";
                        regionText.fill2 = "Bag Grabbit vicinity of pages";
                        regionText.fill3 = "Bag Grabbit";
                        regionText.fill4 = "BAG GRABBIT VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO, APPS, SPECS";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search("index-kpr.html");
                    if(index !== -1){
                        regionText.fill1 = "Keeper vicinity";
                        regionText.fill2 = "Keeper vicinity of pages";
                        regionText.fill3 = "Keeper";
                        regionText.fill4 = "THE KEEPER VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO, APPS, SPECS";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search("index-cb.html");
                    if(index !== -1){
                        regionText.fill1 = "Carry Bag vicinity";
                        regionText.fill2 = "Carry Bag vicinity of pages";
                        regionText.fill3 = "Carry Bag";
                        regionText.fill4 = "THE CARRY BAG VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO, APPS, SPECS";
                        getText(regionText); 
                    };
                    
                    index = currentURL.search("index-tp.html");
                    if(index !== -1){
                        regionText.fill1 = "Tent Poles vicinity";
                        regionText.fill2 = "Tent Poles vicinity of pages";
                        regionText.fill3 = "Tent Poles";
                        regionText.fill4 = "THE TENT POLE VICINITY";
                        regionText.fill5 = "vicinity";
                        regionText.fill6 = "INFO, APPS, SPECS";
                        getText(regionText); 
                    };
                },50);
            }
        };
    }]);