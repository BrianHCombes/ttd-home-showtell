angular.module("viewNav")

// The factory service VnData retrieves menu and link configuration data from local JSON files and image file names from MySQL DB
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
                        }
                      },

        infoThisPageConfig: function(infoThisPageCallBackRef){
                              $http.get('json-info-this-page.json', { cache: true }).then(function(resp) {
                                        infoThisPageCallBackRef(resp.data.infoThisPage);
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
//  LOCAL MENU are the default links that are typically always shown.
        setLinksToShow:   function(templateLinksConfigDataRef){
                            $http.get('json-template-menu-links.json', { cache: true }).then(function (resp){
                              templateLinksConfigDataRef(resp.data);  
                            },
                            function (resp){
                              console.log("ERROR! ERROR!: Failed to access the json-template-menu-links.json file. Error: " + resp.status );
                            });
                          }          
    };                 
}]);