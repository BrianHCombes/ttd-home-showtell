angular.module("viewNav")

    .factory("NavMenuFactory", [ "VnData", function(VnData){
            
        var templateLinksToShow = {
          // default
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
            
                infoThisPageBtnText: function(getInfoThisPageBtnTextRef){ 
                        //var btnText = {"showText":"INFO&nbsp;THIS&nbsp;PAGE", "hideText":"HIDE&nbsp;INFO"};
                        //var btnTextJSON = {};
                        
                        infoThisPageCallBack = function(btnText){
                          // btnTextJSON = data.infoThisPage.btnText
                          //console.log("From the services-http factory: " + JSON.stringify(btnTextJSON));
                          //console.log("From the services-http factory: " + btnTextJSON.showBtnText);
                          getInfoThisPageBtnTextRef(btnText);
                        }
                        VnData.btnConfig(infoThisPageCallBack, "btnText");
                    
                    //return btnText;
                },
            
                navMenuHeader:  function(){
                    var header = {"col1":"SELECTION", "col2":" LINK / BUTTON", "msg":"your current page is in red"};
                    return header;
                },    

                getViewNav: function(getNavMenuBodyRef, location){
                    
                    var navMenu = {};
                    localMenuCallBack = function(data){
                        //console.log("And the value is: " + JSON.stringify(navMenu));
                        navMenu = data.navMenu;
                        //console.log("And the value is: " + navMenu[0].rowClass);
                        navMenu[location].rowClass = "youAreHere";
                        //console.log("And the value is: " + navMenu[location].rowClass);
                        getNavMenuBodyRef(navMenu);
                    };
                    VnData.menuConfig(localMenuCallBack, "localMenu");
                    
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

                        