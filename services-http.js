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
                                                  });
                                                  break;
                        }
                      },
                      
        localMenuConfig:  function(localMenuCallBackRef, itemToConfigure){
                            //console.log("Item to configure is: " + itemToConfigure);
                            var localMenuConfigData = {};
                            $http.get('json-local-menu.json', { cache: true }).then(function (resp){
                                                                                      localMenuConfigData = resp.data;
                                                                                      //console.log("Local menu header: " + JSON.stringify(localMenuConfigData.localMenuHeader));
                                                                                      // console.log("Local menu body: " + JSON.stringify(localMenuConfigData.localMenuBody));
                                                                                      // console.log("Response obj is: " + JSON.stringify(resp));
                                                                                      responseData();
                                                                                    },
                                                                                    function (resp){
                                                                                      console.log("ERROR! ERROR! is: " + JSON.stringify(resp));
                                                                                    });
                            
                            function responseData(){
                              console.log("Item to configure is: " + itemToConfigure);
                              switch(itemToConfigure){

                                case  "localMenuBtnText":break;

                                case  "localMenuHeaderText":
                                                              localMenuCallBackRef(localMenuConfigData.localMenuHeader.header);
                                                              //console.log("Local menu header Text is: " + JSON.stringify(localMenuConfigData.localMenuHeader.header));
                                                              break;


                                case  "localMenuBodyText":
                                                              localMenuCallBackRef(localMenuConfigData.localMenuBody);
                                                              //console.log("Local menu body Text is: " + JSON.stringify(localMenuConfigData.localMenuBody));
                                                              break;
                                                              
                                case  "localMenuItemHighLight":
                                                              localMenuCallBackRef(localMenuConfigData.localMenuHighLight);
                                                              //console.log("Local menu body highlight is: " + JSON.stringify(localMenuConfigData.localMenuHighLight));
                                                              break;
                              };
                            }  
                          }
    };                 
                              
}]);