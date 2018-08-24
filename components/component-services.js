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
                        {"rowClass":"youAreHere",   "selection":"TTD Intro",         "view":"intro",    "destination":"Tarp Tie Down Home & intro"},
                        {"rowClass":"topMenuNav",   "selection":"Price/Buy",         "view":"buyprice", "destination":"Product pricing and store "},
                        {"rowClass":"topMenuNav",   "selection":"Products",          "view":"products", "destination":"Tarp Tie Down products    "},
                        {"rowClass":"topMenuNav",   "selection":"Reviews",           "view":"reviews",  "destination":"Customer feedback         "},
                        {"rowClass":"hyperMenuNav", "selection":"Button A  Thumb 1", "view":"view00",   "destination":"Standard EZ Grabbit       "},
                        {"rowClass":"hyperMenuNav", "selection":"Button A  Thumb 2", "view":"view01",   "destination":"Long Grabbit              "},
                        {"rowClass":"hyperMenuNav", "selection":"Button A  Thumb 3", "view":"view02",   "destination":"Mini Grabbit              "},
                        {"rowClass":"hyperMenuNav", "selection":"Button A  Thumb 4", "view":"view03",   "destination":"EZ Adjust Rope Adjuster   "},
                        {"rowClass":"hyperMenuNav", "selection":"Button B  Thumb 1", "view":"view04",   "destination":"RockBuster Ground Stake   "},
                        {"rowClass":"hyperMenuNav", "selection":"Button B  Thumb 2", "view":"view05",   "destination":"Bag Grabbit Bag Handle    "},
                        {"rowClass":"hyperMenuNav", "selection":"Button B  Thumb 3", "view":"view06",   "destination":"The EZ Grabbit Keeper     "},
                        {"rowClass":"hyperMenuNav", "selection":"Button B  Thumb 4", "view":"view07",   "destination":"Carry/Duffle Bag          "},
                        {"rowClass":"hyperMenuNav", "selection":"Button C  Thumb 1", "view":"view08",   "destination":"Tent Poles                "},
                        {"rowClass":"hyperMenuNav", "selection":"Button C  Thumb 2", "view":"view09",   "destination":"Classic EZ Grabbit        "}
                    ];
                    navMenu[location].rowClass = "youAreHere";
                    return navMenu;
                }
        };
    }]);

                        