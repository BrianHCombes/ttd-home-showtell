angular.module("viewNav")

    .component('intro', {
        
        //template: "<h1>This is the How To template",

        templateUrl: 'components/top_menu/intro/intro.html',
       
        controller: ['GetSet', function(GetSet){
            var vpWidth = GetSet.getViewWidth();
                
            var introSelf = this;
            
            introSelf.test = "This is a controller Test and the view width is: " + vpWidth + "px";
            
            introSelf.fontsize1 = "font-size:" + ((0.00222)*(vpWidth) + 0.40000) + "em";
            
            introSelf.fontsize2 = "font-size:" + ((0.00333)*(vpWidth) + -0.10000) + "em";
            introSelf.fontsize3 = "font-size:" + ((0.00123)*(vpWidth) + 0.30556) + "em";
            introSelf.fontsize4 = "font-size:" + ((0.00062)*(vpWidth) + 0.52778) + "em";
            
            
            introSelf.width1 = "width:" + ((-0.02469)*(vpWidth) + 68.88889) + "%";
            introSelf.width2 = "width:" + ((0.02469)*(vpWidth) + 31.11111) + "%";
            
            introSelf.newWindow = function(){
                //alert();
                //var myWindow = window.open("https://www.tarptiedown.com", "WTF2", "width=600,height=400");
                var myWindow = window.open("components/top_menu/intro/TTD-Logo-1200x225-08-07-2017.png", "WTF2", "width=600,height=400");
            };
            
            
        }]
    })
    
    .component('buyprice', {
        
        //template: "<h1>This is the Buy/Price template",

        templateUrl: 'components/top_menu/buy_price/buy_price.html',
       
        controller: ['GetSet', function(GetSet){
            var vWidth = GetSet.getViewWidth();
            
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
       
        controller: ['GetSet', function(GetSet){
            var vWidth = GetSet.getViewWidth();
            
        }]
    })
    
    .component('policy', {
        
        //template: "<h1>This is the Policy template",

        templateUrl: 'components/top_menu/policy_tmpl/policy.html',
       
        controller: ['GetSet', function(GetSet){
            var vWidth = GetSet.getViewWidth();
            
        }]
    });