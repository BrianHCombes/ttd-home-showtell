angular.module("viewNav")

    .factory("NavMenuFactory", [ function(){
            
        var templateLinksToShow = {
          
          templateLink01:true,
          templateLink01Text:"Text01",
          templateLink02:true,
          templateLink02Text:"Text02",
          templateLink03:false,
          templateLink03Text:"Text03",
          templateLink04:false,
          templateLink04Text:"Text04",
          
        };  
        
        return {
            
                readAboutBtnText: function(){ 
                        var btnText = {"showText":"INFO&nbsp;THIS&nbsp;PAGE", "hideText":"HIDE&nbsp;INFO"};
                    
                    return btnText;
                },
            
                navMenuHeader:  function(){
                    var header = {"col1":"SELECTION", "col2":" LINK / BUTTON", "msg":"your current page is in red"};
                    return header;
                },    

                getViewNav: function(location){

                    var navMenu = 
                    [   
                        {"rowClass":"topMenuNav2",   "selection":"Top Menu",         "view":"",     "destination":""},
                        {"rowClass":"topMenuNav",    "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Tarp Tie Down Home",         "view":"intro",     "destination":"TTD Home       "},
                        {"rowClass":"topMenuNav",    "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Help Getting Around",             "view":"ttd",       "destination":"Help      "},
                        {"rowClass":"topMenuNav",    "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Product&nbsp;pricing&nbsp;and&nbsp;shopping",        "view":"buyprice",  "destination":"Price/Buy"},
                        {"rowClass":"topMenuNav",    "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Overview of our 10 products ",         "view":"products",  "destination":"Products"},
                        {"rowClass":"topMenuNav",    "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Customer feedback",          "view":"reviews",   "destination":"Reviews         "},
                        
                        {"rowClass":"hyperMenuNav2", "selection":"", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav3", "selection":"Tarp Tie Downs", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav",  "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Standard EZ Grabbit ", "view":"view00",    "destination":"Button A Thumb 1    "},
                        {"rowClass":"hyperMenuNav",  "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Classic EZ Grabbit", "view":"view09",    "destination":"Button C Thumb 2        "},
                        {"rowClass":"hyperMenuNav",  "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Long Grabbit", "view":"view01",    "destination":"Button A Thumb 2              "},
                        {"rowClass":"hyperMenuNav",  "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Mini Grabbit", "view":"view02",    "destination":"Button A Thumb 3              "},
                        {"rowClass":"hyperMenuNav",  "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;The EZ Grabbit Keeper", "view":"view06",    "destination":"Button B Thumb 3     "},
                        
                        {"rowClass":"hyperMenuNav2", "selection":"", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav3", "selection":"Rope Adjusters", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav",  "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;EZ Adjust Rope Adjuster", "view":"view03",    "destination":" Button A Thumb 4   "},
                        
                        {"rowClass":"hyperMenuNav2", "selection":"", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav3", "selection":"Ground Stakes", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav",  "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;RockBuster Ground Stake", "view":"view04",    "destination":" Button B Thumb 1   "},
                        
                        {"rowClass":"hyperMenuNav2", "selection":"", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav3", "selection":"Bag Handle", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav",  "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Bag Grabbit Bag Handle", "view":"view05",    "destination":" Button B Thumb 2   "},
                        
                        {"rowClass":"hyperMenuNav2", "selection":"", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav3", "selection":"Misc", "view":"",    "destination":""},
                        {"rowClass":"hyperMenuNav",  "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Carry/Duffle Bag", "view":"view07",    "destination":" Button B Thumb 4        "},
                        {"rowClass":"hyperMenuNav",  "selection":"&nbsp;&nbsp;&nbsp;&#8680;&nbsp;&nbsp;Tent Poles", "view":"view08",    "destination":" Button C Thumb 1               "},
                    ];
                    navMenu[location].rowClass = "youAreHere";
                    return navMenu;
                },
                
                getBtnText: function(){
                    var btnText = {"showText":"LOCAL&nbsp;MENU", "hideText":"HIDE&nbsp;LOCAL&nbsp;MENU"};
                    return btnText;
                },
            
                setTemplateLinksToShow: function(templatelinkstoshow){
                  console.log("Being Called: condition = " + templatelinkstoshow);
                  
                  switch(templatelinkstoshow){
                  
                    case 'buyprice':
                        templateLinksToShow.templateLink01 = true;
                        templateLinksToShow.templateLink02 = true;
                        templateLinksToShow.templateLink03 = false;  
                        templateLinksToShow.templateLink04 = true;  
                        templateLinksToShow.templateLink04Text = "<a  class='topTemplateMenuLink' \n\
                                                                      title='Go directly to Tarp Tie Down store' \n\
                                                                      href='https://www.tarptiedown.com/TTD-Store-2018/'> \n\
                                                                      TTD STORE \n\
                                                                  </a>";  
                        break;
                    
                    case 'view00':
                        templateLinksToShow.templateLink01 = true;
                        templateLinksToShow.templateLink02 = true;
                        templateLinksToShow.templateLink03 = false;  
                        templateLinksToShow.templateLink04 = true;  
                        templateLinksToShow.templateLink04Text = "<a  class='topTemplateMenuLink' \n\
                                                                      title='Go directly to EZ Grabbit application pages' \n\
                                                                      href='https://www.tarptiedown.com/ttd-vn/ttd-vn-ezg/index-ezg.html'> \n\
                                                                      EZG APP PAGES \n\
                                                                  </a>";  
                        break;
                     
                    case 'default':
                        templateLinksToShow.templateLink01 = true;  
                        templateLinksToShow.templateLink02 = true;  
                        templateLinksToShow.templateLink03 = false;  
                        templateLinksToShow.templateLink04 = false;  
                        break;
                  } 
                },

                getTemplateLinksToShow: function(){
                    return templateLinksToShow;
                }
        };
    }]);

                        