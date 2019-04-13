angular.module("viewNav")

// The factory service VnData retrieves menu configuration data from a local JSON file and image file names from MySQL DB
.factory('VnData', ['$http', function($http){
   
    return  {

        rbGetPicsAjax:  function(receiveData){
                            var picArray = [];
                                var xhttp = new XMLHttpRequest();
                                xhttp.onreadystatechange = function() {
                                    if(xhttp.readyState == 4){
                                    }    
                                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                                        picArray = xhttp.responseText;  
                                        if(picArray.length <= 2)
                                            alert("Query unsucessful");
                                        picArray = JSON.parse(picArray);
                                        var vnData = picArray;
                                        receiveData(vnData);
                                    }
                                };
                                xhttp.open("GET", "server.php?q=queryTest", true);
                                xhttp.send();
                        },

        menuConfig:   function(menuCallbackRef, menuToPopulate){
                        switch(menuToPopulate){
                          case "frameworkMenus":  $http.get('json-client.json', { cache: true }).then(function(resp) {
                                                  menuCallbackRef(resp.data);
                                                  });
                                                  break;

                          case "localMenu":       $http.get('json-local-menu.json', { cache: true }).then(function(resp) {
                                                  menuCallbackRef(resp.data);
                                                  });
                                                  break;
                        }
                      },

        btnConfig:    function(infoThisPageCallBackRef, itemToPopulate){
                        switch(itemToPopulate){
                          case "btnText":         $http.get('json-info-this-page.json', { cache: true }).then(function(resp) {
                                                  //console.log("From the JSON file " + JSON.stringify(resp.data));
                                                  //console.log("A value is: " + resp.data.infoThisPage.btnText.showBtnText);
                                                  infoThisPageCallBackRef(resp.data.infoThisPage.btnText);
                                                  //console.log("The WTF is: " + resp.data.infoThisPage.template.intro.infoThisPageHeaderText);
                                                  });
                                                  break;
                        }
                      },
                      
        infoThisPageConfig: function(infoThisPageCallBackRef){
                              $http.get('json-info-this-page.json', { cache: true }).then(function(resp) {
                                        //console.log("From the JSON file " + JSON.stringify(resp.data));
                                        //console.log("A value is: " + resp.data.infoThisPage.btnText.showBtnText);
                                        infoThisPageCallBackRef(resp.data.infoThisPage);
                                        //console.log("The WTF is: " + resp.data.infoThisPage.template.intro.infoThisPageHeaderText);
                              });
                            },
                      
        localMenuConfig:  function(localMenuCallBackRef, itemToConfigure){
                            var localMenuConfigData = {};
                            $http.get('json-local-menu.json', { cache: true }).then(function (resp){
                                                                                      localMenuConfigData = resp.data;
                                                                                      responseData();
                                                                                    },
                                                                                    function (resp){
                                                                                      console.log("ERROR! ERROR! is: " + JSON.stringify(resp));
                                                                                    });
                            
                            function responseData(){
                              switch(itemToConfigure){

                                case  "localMenuBtnText":     localMenuCallBackRef(localMenuConfigData.btnText);
                                                              break;

                                case  "localMenuHeaderText":
                                                              localMenuCallBackRef(localMenuConfigData.localMenuHeader.header);
                                                              break;


                                case  "localMenuBodyText":
                                                              localMenuCallBackRef(localMenuConfigData.localMenuBody);
                                                              break;
                                                              
                                case  "localMenuItemHighLight":
                                                              localMenuCallBackRef(localMenuConfigData.localMenuHighLight);
                                                              break;
                              };
                            }  
                          },
                          
//  The setLinksToShow function calls the JSON file which has the configuration for what links to show at the top of each template/view page. INFO THIS PAGE and
//  LOCAL MENU are the default links that are typically always shown. However,.
        setLinksToShow:   function(templateLinksConfigDataRef){
                            var templateLinksToShow = {};
                            $http.get('json-template-menu-links.json', { cache: true }).then(function (resp){
                              templateLinksToShow = resp.data;
                              responseData();
                            },
                            function (resp){
                              console.log("ERROR! ERROR!: Failed to access the json-template-menu-links.json file.");
                            });
                            
                            function responseData(){
                              templateLinksConfigDataRef(templateLinksToShow);  // templateLinksToShow
                            }
        }          
    };                 
                              
}]);