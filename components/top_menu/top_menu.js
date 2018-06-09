angular.module("viewNav")

    .component('intro', {
        
        //template: "<h1>This is the How To template",

        templateUrl: 'components/top_menu/intro/intro.html',
       
        controller: ['GetSet', function(GetSet){
            var introSelf = this;
            
            var vWidth = GetSet.getViewWidth();
            
            introSelf.test = "This is a controller Test and the view width is: " + vWidth + "px";
            
            
        }]
    })
    
    .component('buyprice', {
        
        //template: "<h1>This is the Buy/Price template",

        templateUrl: 'components/top_menu/buy_price/buy_price.html',
       
        controller: [ function(){
            
        }]
    })
    
    .component('products', {
        
        template: "<h1>This is the Products template",

        //templateUrl: 'components/components00_03/tmpl_03/viewTmpl_03.html',
       
        controller: [ function(){
            
        }]
    })
    
    .component('reviews', {
        
        template: "<h1>This is the Reviews template",

        //templateUrl: 'components/components00_03/tmpl_03/viewTmpl_03.html',
       
        controller: [ function(){
            
        }]
    })
    
    .component('policy', {
        
        //template: "<h1>This is the Policy template",

        templateUrl: 'components/top_menu/policy_tmpl/policy.html',
       
        controller: [ function(){
            
        }]
    })