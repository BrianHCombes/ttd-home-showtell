angular.module("viewNav")

    .factory("NavMenuFactory", [ "VnData", function(VnData){
           
        var templateLinksToShow = {};
        
        VnData.localMenuConfig();
        
        return {
            
                // Incoming and outgoing callbacks used here to retrieve INFO THIS PAGE data from the services-http.js file and get it to the components-children.js file. 
                // Note: The INFO THIS PAGE body text may consist of multiple HTML fragments which are kept in JSON array form, retrieved and assembled here into a single
                // HTML string for delivery to the components-children.js file and subsequent presentation. 
                infoThisPageCONFIG: function(getInfoThisPageRef, view){ 
                        
                        infoThisPageCallBack = function(infoThisPageConfigData){
                          var infoThisPage = {"header":"", "body":""};
                          var concatenatedHTMLStrings = "";
                          for(i=0; i<infoThisPageConfigData.template[view].infoThisPageBodyText.length; i++){
                            concatenatedHTMLStrings += infoThisPageConfigData.template[view].infoThisPageBodyText[i];
                            if(i === infoThisPageConfigData.template[view].infoThisPageBodyText.length-1){
                              infoThisPage.header = infoThisPageConfigData.template[view].infoThisPageHeaderText;
                              infoThisPage.body = concatenatedHTMLStrings;
                              getInfoThisPageRef(infoThisPage);
                            }
                          }
                        };
                        VnData.infoThisPageConfig(infoThisPageCallBack);
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

                
//***********************************************************************************************************************************************************                
// This section deals with what template links to show on a given template. INFO THIS PAGE and LOCAL MENU links are considered default.

                getTemplateLinksToShow: function(getTemplateLinksRef){
                  
                  setTemplateLinks = function(templateLinksConfigData){
                    setTimeout(function(){                                      // setTimeout used to assure page URL is stable before reading
                      var urlString = document.URL;
                      var templateName = urlString.slice(urlString.search("#/")+2);
                      templateLinksToShow = templateLinksConfigData.templatelinkstoshow[templateName];
                      getTemplateLinksRef(templateLinksToShow);
                    },100);
                  };
                  VnData.setLinksToShow(setTemplateLinks);                      // invoke http call 
                }

          };
    }]);

                        