angular.module("viewNav")

    .component('intro', {
        
        //template: "<h1>This is the How To template",

        templateUrl: 'components/top_menu/intro/intro.html',
       
        controller: ['GetSet', function(GetSet){
            var viewWidth = GetSet.getViewWidth();
                
            var introSelf = this;
            
            introSelf.test = "This is a controller Test and the view width is: " + viewWidth + "px";
            
            introSelf.fontsize1 = "font-size:" + ((0.00222)*(viewWidth)+0.40000) + "em";
            
            introSelf.fontsize2 = "font-size:" + ((0.00111)*(viewWidth)+0.70000) + "em";    /* AR_2_1.1 */
            introSelf.fontsize3 = "font-size:" + ((0.00123)*(viewWidth)+0.30556) + "em";
            introSelf.fontsize4 = "font-size:" + ((0.00062)*(viewWidth)+0.52778) + "em";
            introSelf.fontsize5 = "font-size:" + ((0.00086)*(viewWidth)+0.48889) + "em";
            introSelf.fontsize6 = "font-size:" + ((0.00123)*(viewWidth)+0.55556) + "em";
            
            
            
            introSelf.width1 = "width:" + ((-0.02469)*(viewWidth)+58.88889) + "%";  /* AR_30_50 */
            introSelf.width2 = "width:" + ((0.02469)*(viewWidth)+41.11111) + "%";
            
            introSelf.newWindow = function(){
                //alert();
                //var myWindow = window.open("https://www.tarptiedown.com", "WTF2", "width=600,height=400");
                //var myWindow = window.open("components/top_menu/intro/TTD-Logo-1200x225-08-07-2017.png", "WTF2", "width=600,height=400,left=285");
                var left = viewWidth/2-300;
                var myWindow = window.open("components/top_menu/intro/navigate.html", "", "width=800,height=600,top=100,left="+left);
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