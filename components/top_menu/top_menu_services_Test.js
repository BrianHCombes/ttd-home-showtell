angular.module("viewNav")

    .factory("topMenuService", [ function(){
            
        return {
            
            ttdRegionText: function(){
                var currentURL = window.location.href;
                var regionText = {};
                var index = "";

                index = currentURL.search("index.html#/ttd");
                if(index !== -1){
                    regionText.fill1 = "TTD Home";
                    regionText.fill2 = "Tarp Tie Down home region";
                    regionText.fill3 = "TTD Home";
                    alert(currentURL + " -- " + index + " -- " + regionText.fill2);
                    return regionText; 
                };

                index = currentURL.search("ttd-vn-ezg");
                if(index !== -1){
                    regionText.fill1 = "EZ Grabbit";
                    regionText.fill2 = "EZ Grabit region of pages";
                    regionText.fill3 = "EZG Intro";
                    alert(currentURL + " -- " + index + " -- " + regionText.fill2);
                    return regionText; 
                };

                index = currentURL.search("ttd-vn-rb");
                if(index !== -1){
                    regionText.fill1 = "RockBuster";
                    regionText.fill2 = "RockBuster region of pages";
                    regionText.fill3 = "RB Intro";
                    alert(currentURL + " -- " + index + " -- " + regionText.fill2);
                    return regionText; 
                };

                index = currentURL.search("ttd-vn-eza");
                if(index !== -1){
                    regionText.fill1 = "EZ Adjust";
                    regionText.fill2 = "EZ Adjust region of pages";
                    regionText.fill3 = "EZA Intro";
                    alert(currentURL + " -- " + index + " -- " + regionText.fill2);
                    return regionText; 
                }
            }
        };
    }]);