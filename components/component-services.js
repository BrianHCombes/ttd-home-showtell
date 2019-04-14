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
                                    templateLink04Text:"Text04"

                                  };  
        
        VnData.localMenuConfig();
        
        return {
            
                infoThisPageBtnText: function(getInfoThisPageBtnTextRef){ 
                        //var btnText = {"showText":"INFO&nbsp;THIS&nbsp;PAGE", "hideText":"HIDE&nbsp;INFO"};
                        //var btnTextJSON = {};
                        
                        infoThisPageCallBack = function(btnText){
                          // btnTextJSON = data.infoThisPage.btnText
                          //console.log("From the services-http factory: " + JSON.stringify(btnTextJSON));
                          //console.log("From the services-http factory: " + btnTextJSON.showBtnText);
                          getInfoThisPageBtnTextRef(btnText);
                        };
                        VnData.btnConfig(infoThisPageCallBack, "btnText");
                    
                    //return btnText;
                },
          
                infoThisPageCONFIG: function(){ 
                        //var btnText = {"showText":"INFO&nbsp;THIS&nbsp;PAGE", "hideText":"HIDE&nbsp;INFO"};
                        //var btnTextJSON = {};
                        
                        infoThisPageCallBack = function(infoThisPageConfigData){
                          // btnTextJSON = data.infoThisPage.btnText
                          //console.log("From the services-http factory: " + JSON.stringify(infoThisPageConfigData));
                          //console.log("From the services-http factory: " + btnTextJSON.showBtnText);
                          //getInfoThisPageBtnTextRef(btnText);
                        };
                        VnData.infoThisPageConfig(infoThisPageCallBack);
                    
                    //return btnText;
                },
                
  
                // incoming and outgoing callbacks used here to retrieve local menu data from the services-http.js file and get it to the components-children.js file
                getLocalMenuheader: function(getLocalMenuHeaderRef){
                    localMenuCallBack = function(localMenuHeader){
                        getLocalMenuHeaderRef(localMenuHeader);
                    };
                    VnData.localMenuConfig(localMenuCallBack, "localMenuHeaderText");  
                },    
          
                // incoming and outgoing callbacks used here to retrieve local menu data from the services-http.js file and get it to the components-children.js file
                getLocalMenubody: function(getLocalMenuBodyRef, location){
                    
                    localMenuCallBack = function(localMenuBody){
                        localMenuBody[location].rowClass = "youAreHere"; // "youAreHere" is a CSS class
                        getLocalMenuBodyRef(localMenuBody);
                    };
                    VnData.localMenuConfig(localMenuCallBack, "localMenuBodyText");
                },
                
                // incoming and outgoing callbacks used here to retrieve local menu data from the services-http.js file and get it to the components-children.js file
                getLocalMenuHighLIGHT: function(getLocalMenuHighLightRef){
                    
                    localMenuCallBack = function(localMenuHighLight){
                      getLocalMenuHighLightRef(localMenuHighLight);
                    };
                    VnData.localMenuConfig(localMenuCallBack, "localMenuItemHighLight");
                },
                
                
                getLocalMenuBtnTEXT: function(getLocalMenuBtnTextRef){
                  
                    localMenuCallBack = function(localMenuBtnText){
                      //console.log("From the services-http factory local menu " + JSON.stringify(localMenuBtnText));
                      getLocalMenuBtnTextRef(localMenuBtnText);
                    };
                    // var btnText = {"showText":"LOCAL&nbsp;MENU", "hideText":"HIDE&nbsp;LOCAL&nbsp;MENU"};
                    VnData.localMenuConfig(localMenuCallBack, "localMenuBtnText");
                },
                
//***********************************************************************************************************************************************************                
// This section deals with what template links to show on a given template. INFO THIS PAGE and LOCAL MENU links are considered default.

          getTemplateLinksToShow: function(){
                    return templateLinksToShow;
                },
          
                // 
                setTemplateLinksToShow: function(templatelinkstoshow){
                  console.log("Being Called: condition = " + templatelinkstoshow);
                  
                  // Callback here
                  setTemplateLinks = function(templateLinksConfigData){
                    //console.log("Template Links at component-services.js is: " + JSON.stringify(templateLinksConfigData));
                    templateLinksToShow = templateLinksConfigData.templatelinkstoshow[templatelinkstoshow];
                    console.log("Template Link accessed: " + templatelinkstoshow + " and content is: " + JSON.stringify(templateLinksConfigData.templatelinkstoshow[templatelinkstoshow]));
                  };
                  VnData.setLinksToShow(setTemplateLinks); // invoke http call
                  
                  //console.log("Local menu body: " + JSON.stringify(linksToShow));
                  
                  
/*                   
                  switch(templatelinkstoshow){
                  
                    case 'buyprice':
                        templateLinksToShow.templateLink01 = true;
                        templateLinksToShow.templateLink01Text = "";
                        templateLinksToShow.templateLink02 = true;
                        templateLinksToShow.templateLink02Text = "";
                        templateLinksToShow.templateLink03 = false;  
                        templateLinksToShow.templateLink03Text = "";
                        templateLinksToShow.templateLink04 = true;  
                        templateLinksToShow.templateLink04Text = "<a  class='topTemplateMenuLink' \n\
                                                                      title='Go directly to Tarp Tie Down store' \n\
                                                                      href='https://www.tarptiedown.com/TTD-Store-2018/'> \n\
                                                                      TTD STORE \n\
                                                                  </a>";  
                        break;
                    
                    case 'view00':
                        templateLinksToShow.templateLink01 = true;
                        templateLinksToShow.templateLink01Text = "";
                        templateLinksToShow.templateLink02 = true;
                        templateLinksToShow.templateLink02Text = "";
                        templateLinksToShow.templateLink03 = false;
                        templateLinksToShow.templateLink03Text = "";
                        templateLinksToShow.templateLink04 = true;  
                        templateLinksToShow.templateLink04Text = "<a  class='topTemplateMenuLink' \n\
                                                                      title='Go directly to EZ Grabbit application pages' \n\
                                                                      href='https://www.tarptiedown.com/ttd-vn/ttd-vn-ezg/index-ezg.html'> \n\
                                                                      EZG APP PAGES \n\
                                                                  </a>";  
                        break;
                     
                    case 'default':
                        templateLinksToShow.templateLink01 = true; 
                        templateLinksToShow.templateLink01Text = "";
                        templateLinksToShow.templateLink02 = true;  
                        templateLinksToShow.templateLink02Text = "";
                        templateLinksToShow.templateLink03 = false; 
                        templateLinksToShow.templateLink03Text = "";
                        templateLinksToShow.templateLink04 = false; 
                        templateLinksToShow.templateLink04Text = "";
                        break;
                  }
                  
*/
                }
        };
    }]);

                        