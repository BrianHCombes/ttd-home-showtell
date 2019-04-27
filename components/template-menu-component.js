angular.module("viewNav")

    .component('child1', {
        
        templateUrl: 'components/template-menu-component.html',
       
        controller: ['GetSet', 'NavMenuFactory', '$scope', function(GetSet, NavMenuFactory, $scope){
            var viewWidth = GetSet.getViewWidth();
                
            var child1Self = this;
                    
            // Template top menu font size
            child1Self.rsTemplateTopMenufontsize1 = "font-size:" + ((0.00041)*(viewWidth)+0.51824) + "em";    // AR_1170_1.00_320_0.65 
            
            // Response 'Info This Page' button and text box
            child1Self.rsInfoThisPagefontsize2 = "font-size:" + ((0.00037)*(viewWidth)+0.56667) + "em";       // AR_1170_1.00_360_0.70
            
            // Response 'Menu' button and text box
            child1Self.rsLocalMenuFontsize2 = "font-size:" + ((0.00022)*(viewWidth)+0.59722) + "em";          // AR_1170_0.85_360_0.70
            child1Self.rsLocalMenuLeft1 = "left:" + ((0.02824)*(viewWidth)-8.03529) + "%";                    // AR_1170_25.00_320_1.00
            child1Self.rsLocalMenuWidth1 = "width:" + ((-0.05309)*(viewWidth)+112.11111) + "%";               // AR_1170_50.00_360_93.00  
            
            
//***********************************************************************************************************************************************************            
// The getTemplateLinks method configures the links to show on the top of the template (this is not the top (of the frame) menu) 

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
                    child1Self.localMenuBody = localMenuBody;
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
    
    