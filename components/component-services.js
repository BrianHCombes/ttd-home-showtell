angular.module("viewNav")

    .factory("NavMenuFactory", [ function(){
            
        return {
            
                readAboutBtnText: function(){ 
                        var btnText = {"showText":"INFO THIS PAGE", "hideText":"HIDE INFO"};
                    
                    return btnText;
                },
            
                navMenuHeader:  function(){
                    var header = {"col1":"SELECTION", "col2":"DESTINATION", "msg":"page your on now"};
                    return header;
                },    

                getViewNav: function(location){

                    var navMenu = 
                    [   
                        {"rowClass":"topMenuNav2",   "selection":"Top Menu",         "view":"",     "destination":""},
                        {"rowClass":"topMenuNav",   "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;TTD Home",         "view":"intro",     "destination":"Tarp Tie Down Home       "},
                        {"rowClass":"topMenuNav",   "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Help",             "view":"ttd",       "destination":"Help Getting Around      "},
                        {"rowClass":"topMenuNav",   "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Price/Buy",        "view":"buyprice",  "destination":"Product pricing and shopping "},
                        {"rowClass":"topMenuNav",   "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Products",         "view":"products",  "destination":"Overview of our 10 products "},
                        {"rowClass":"topMenuNav",   "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Reviews",          "view":"reviews",   "destination":"Customer feedback         "},
                        
                        {"rowClass":"hyperMenuNav2", "selection":"", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav3", "selection":"Tarp Tie Downs", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav", "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Button&nbsp;A&nbsp;Thumb&nbsp;1", "view":"view00",    "destination":"Standard EZ Grabbit       "},
                        {"rowClass":"hyperMenuNav", "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Button C Thumb 2", "view":"view09",    "destination":"Classic EZ Grabbit        "},
                        {"rowClass":"hyperMenuNav", "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Button A Thumb 2", "view":"view01",    "destination":"Long Grabbit              "},
                        {"rowClass":"hyperMenuNav", "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Button A Thumb 3", "view":"view02",    "destination":"Mini Grabbit              "},
                        {"rowClass":"hyperMenuNav", "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Button B Thumb 3", "view":"view06",    "destination":"The EZ Grabbit Keeper     "},
                        
                        {"rowClass":"hyperMenuNav2", "selection":"", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav3", "selection":"Rope Adjusters", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav", "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Button A Thumb 4", "view":"view03",    "destination":"EZ Adjust Rope Adjuster   "},
                        
                        {"rowClass":"hyperMenuNav2", "selection":"", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav3", "selection":"Ground Stakes", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav", "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Button B Thumb 1", "view":"view04",    "destination":"RockBuster Ground Stake   "},
                        
                        {"rowClass":"hyperMenuNav2", "selection":"", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav3", "selection":"Bag Handle", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav", "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Button B Thumb 2", "view":"view05",    "destination":"Bag Grabbit Bag Handle    "},
                        
                        {"rowClass":"hyperMenuNav2", "selection":"", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav3", "selection":"Misc", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav", "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Button B Thumb 4", "view":"view07",    "destination":"Carry/Duffle Bag          "},
                        {"rowClass":"hyperMenuNav", "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Button C Thumb 1", "view":"view08",    "destination":"Tent Poles                "},
                        
                    ];
                    navMenu[location].rowClass = "youAreHere";
                    return navMenu;
                },
                
                getBtnText: function(){
                    var btnText = {"showText":"LOCAL MENU", "hideText":"HIDE LOCAL MENU"};
                    return btnText;
                }
        };
    }]);

                        