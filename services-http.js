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
                        
                menuConfig: function(menuCallbackRef, menuToPopulate){
                                switch(menuToPopulate){
                                    case "menus":   return $http.get('json-client.json', { cache: true }).then(function(resp) {
                                                        menuCallbackRef(resp.data);
                                                    });
                                                    break;
                                }
                            }        
            };
}]);