angular.module("viewNav")

    .component('child1', {
        
        templateUrl: 'components/components-child_1.html',
       
        controller: ['GetSet', 'NavMenuFactory', 'topMenuService', '$scope', function(GetSet, NavMenuFactory, topMenuService, $scope){
            var viewWidth = GetSet.getViewWidth();
                
            var child1Self = this;
                    
            // Template top menu font size
            child1Self.rsTemplateTopMenufontsize1 = "font-size:" + ((0.00071)*(viewWidth)+0.42412) + "em";  // AR_1170_1.25_320_0.65
            
            // Response 'read about' button and text box
            child1Self.rsReadAboutfontsize2 = "font-size:" + ((0.00064)*(viewWidth)+0.49889) + "em";    // AR_1170_1.25_360_0.73
            child1Self.rsReadAboutwidth1 = "width:" + ((-0.01605)*(viewWidth)+48.77778) + "%";          /* AR_40.00_60.00 */
            
            // Response 'Menu' button and text box
            child1Self.rsNavfontsize2 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em";          // AR_1170_1.25_360_0.70
            child1Self.rsNavleft1 = "left:" + ((0.02824)*(viewWidth)-8.03529) + "%";                    // AR_1170_25.00_320_1.00
            child1Self.rsNavwidth1 = "width:" + ((-0.05309)*(viewWidth)+112.11111) + "%";               // AR_1170_50.00_360_93.00  
            
            
//***********************************************************************************************************************************************************            
// The getTemplateLinks method configures the links to show on the template (this is not the top menu) 

            child1Self.templateLinksToShow = {};
            getTemplateLinks = function(templateLinksToShow){
              child1Self.templateLinksToShow = templateLinksToShow;
              $scope.$apply(function(){child1Self.templateLinksToShow;});  // intiates a digest cycle
            };
            NavMenuFactory.getTemplateLinksToShow(getTemplateLinks);
            
  
//***********************************************************************************************************************************************************            
// The infoThisPageConfig method activates and configures the INFO THIS PAGE content per the template being displayed
            
            // The infoThisPageConfig method activates and configures the INFO THIS PAGE per the template being displayed.
            // Configuration data is retrieved via $http requests to the json-info-this-page.json file using callback architecture.
            child1Self.showInfoTHISPAGE = false;
            child1Self.infoTHISPAGE = function(){
                if(child1Self.showInfoTHISPAGE === false){
                    child1Self.showInfoTHISPAGE = true;
                    var urlString = document.URL;
                    var queryParam = urlString.slice(urlString.search("#/")+2);
                    infoThisPageConfig(queryParam);
                } 
                else {
                    child1Self.showInfoTHISPAGE = false;
                }
            }; 
            
            function infoThisPageConfig(queryParam){
              getInfoThisPage = function(getInfoThisPageData){
                        child1Self.infoThisPageHeaderText = getInfoThisPageData.header;
                        child1Self.infoThisPageBodyText = getInfoThisPageData.body;
              };
              NavMenuFactory.infoThisPageCONFIG(getInfoThisPage, queryParam);
            };    
            
            
//***********************************************************************************************************************************************************            
// The localMENU method activates and configures the LOCAL MENU per the template being displayed

            child1Self.showLocalMENU = false;
            child1Self.localMENU = function(){
                if(child1Self.showLocalMENU === false){
                    child1Self.showLocalMENU = true;
                    var urlString = document.URL;
                    var queryParam = urlString.slice(urlString.search("#/")+2);
                    localMenuConfig(queryParam);
                } 
                else {
                    child1Self.showLocalMENU = false;
                }
            }; 
            
            // The localMenuConfig(queryParam) method is invoked by the child1Self.localMENU method and calls all methods used to configure the LOCAL MENU. 
            // Configuration data is retrieved via $http requests to the json-info-this-page.json file using callback architecture.
            function localMenuConfig(queryParam){
                var locationHighlight;
              
                // Nested callbacks - first NavMenuFactory.getLocalMenuHighLIGHT(getLocalMenuHighLight) is called to get the HighLight object.
                // Then when the high light object is returned the particular highlight value to use is determined with the queryParam value.
                // Then that high light value is sent along with the NavMenuFactory.getLocalMenubody(getLocalMenuBody, locationHighlight) method
                // to get the local menu body with the appropriately highlighted view (in red) on the menu when displayed.
                function getLocalMenuHighLight(localMenuHighLight){
                  locationHighlight = localMenuHighLight[queryParam];
                  function getLocalMenuBody(localMenuBody){
                    child1Self.navMenuBody = localMenuBody;
                  };
                  NavMenuFactory.getLocalMenubody(getLocalMenuBody, locationHighlight); // step 2: send highlight along with getLocalMenuBody callback 
                };
                NavMenuFactory.getLocalMenuHighLIGHT(getLocalMenuHighLight); // step 1: get highlight by sending getLocalMenuHighLight callback
              
                function getLocalMenuHeader(localMenuHeader){
                  child1Self.localMenuHeader = localMenuHeader;
                };
                NavMenuFactory.getLocalMenuheader(getLocalMenuHeader);
            };
        }]
    });
    
    