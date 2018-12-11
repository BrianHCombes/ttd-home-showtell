angular.module("viewNav")

    .component('child1', {
        
        templateUrl: 'components/components-child_1.html',
       
        controller: ['GetSet', 'NavMenuFactory', function(GetSet, NavMenuFactory){
            var viewWidth = GetSet.getViewWidth();
                
            var child1Self = this;
                        
            // Response Section 1
            child1Self.rs1fontsize1 = "font-size:" + ((0.00086)*(viewWidth)+0.48889) + "em";            /* AR_2.00_0.75 */
            child1Self.rs1fontsize2 = "font-size:" + ((0.00049)*(viewWidth)+0.62222) + "em";            /* AR_1.20_0.90 */
            child1Self.rs1fontsize3 = "font-size:" + ((0.00031)*(viewWidth)+0.73889) + "em";            /* AR_1.10_0.85 */
            child1Self.rs1left1 = "left:" + ((0.05309)*(viewWidth)-17.11111) + "%";                     /* AR_45.00_2.00 */
            
             // Response 'read about' button and text box
            child1Self.rsReadAboutfontsize1 = "font-size:" + ((0.00093)*(viewWidth)+0.41667) + "em";    /* AR_1.50_0.75 */
            child1Self.rsReadAboutfontsize2 = "font-size:" + ((0.00095)*(viewWidth)+0.38778) + "em";    /* AR_1.50_0.73 */
            child1Self.rsReadAboutwidth1 = "width:" + ((-0.01605)*(viewWidth)+48.77778) + "%";          /* AR_40.00_60.00 */
            child1Self.rsReadAboutwidth2 = "width:" + ((0.14198)*(viewWidth)+63.88889) + "px";          /* AR_230.01_115.00 */
            
            // Response 'Menu' button and text box
            child1Self.rsNavfontsize1 = "font-size:" + ((0.00093)*(viewWidth)+0.41667) + "em";          /* AR_1.50_0.75 */
            child1Self.rsNavfontsize2 = "font-size:" + ((0.00068)*(viewWidth)+0.45556) + "em";          // AR_1170_1.25_360_0.70
            
            child1Self.rsNavleft1 = "left:" + ((0.02824)*(viewWidth)-8.03529) + "%";                    // AR_1170_25.00_320_1.00
            child1Self.rsNavwidth1 = "width:" + ((-0.05309)*(viewWidth)+112.11111) + "%";               // AR_1170_50.00_360_93.00  
            
            
            // Sets mode of the "READ ABOUT" button
            
            var readAboutBtnText = NavMenuFactory.readAboutBtnText();
            child1Self.display1 = false;
            child1Self.morelessText1 = readAboutBtnText.showText;
            child1Self.moreless1 = function(){
                if(child1Self.morelessText1 === readAboutBtnText.showText){
                    child1Self.morelessText1 = readAboutBtnText.hideText;
                    child1Self.display1 = true;
                    var urlString = document.URL;
                    var queryParam = urlString.slice(urlString.search("#/")+2);
                    readAboutText(queryParam);
                } 
                else {
                    child1Self.morelessText1 = readAboutBtnText.showText;
                    child1Self.display1 = false;
                }
            }; 
                
            function readAboutText(queryParam){
                
                switch(queryParam){
                    
                    case "ttd":
                        child1Self.readAboutHeaderText  = "The TTD Home Page Region:";
                        child1Self.readAboutBodyText    = "This page provides a brief overview about how to get around the EZ Grabbit region.";  
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                        
                    case "intro":
                        child1Self.readAboutHeaderText  = "Tarp Tie Down Home Page:";
                        child1Self.readAboutBodyText    = "To get around read the <span class='intro01'><b>'Quick Start'</b></span>\n\
                                                           (under or below this text box). This website \n\
                                                           is intended to provide information about our products with numerous images and \n\
                                                           discussion. To purchase please go to our store by selecting the Price/Buy link \n\
                                                           at the top of the page.";    
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;   
                    
                    case "buyprice":
                        child1Self.readAboutHeaderText  = "Pricing and Ordering:";
                        child1Self.readAboutBodyText    = "Click on the shop buttons to go to our store and get pricing tables \n\
                                                           on the specific products. Or click on <b>'Go directly to TTD Store'</b> to\n\
                                                           go to our store's home page.";  
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                    
                    case "products":
                        child1Self.readAboutHeaderText  =  "Our list of products:";
                        child1Self.readAboutBodyText    =  "Use the Quick Menu or scroll down for brief product overviews. \n\
                                                            Select the app links for more detailed discussion, field \n\
                                                            applications, and specifications.";  
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                        
                    case "reviews":
                        child1Self.readAboutHeaderText  = "Customer reviews:";
                        child1Self.readAboutBodyText    = "These are the reviews we sometimes get. <b>They are unsolicited!</b>";  
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                        
                    case "view00":
                        child1Self.readAboutHeaderText  = "EZ Grabbit's main features:";
                        child1Self.readAboutBodyText    = "</span><br><a class='btnStyle2' href='https://www.tarptiedown.com/ttd-vn/ttd-vn-ezg/index-ezg.html#/intro'><b>Go To EZ Grabbit Pages</b></a><br> \n\
                                                           This composite image shows the four feature capabilities of the standard \n\
                                                           EZ Grabbit. You can mount tarps to surfaces, connect tarps together, \n\
                                                           attach anywhere, and save and reuse damaged tarps.<br>";
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                        
                    case "view01":
                        child1Self.readAboutHeaderText  =  "Long Grabbit";
                        child1Self.readAboutBodyText    =  "</span><br><a class='btnStyle2' href='https://www.tarptiedown.com/components/components00_03/tmpl_01/ttd-vn-lg-not-complete-msg.html'><b>Go To Long Grabbit Pages</b></a><br> \n\
                                                            The Long Grabbit tarp tie down is our 20\" model. It is ideal for securing \n\
                                                            large spans of material subject to wind forces such as with overhead cover. \n\
                                                            It is also ideal for large \"flanking\" spans of material such as tarps over a \n\
                                                            haystack, etc. Long Grabbits are great for attachment to tarp corners, for \n\
                                                            forming a ridge line or peak on a tarp, and for attachment to any location \n\
                                                            where an extra strong hold is needed. And don't forget you can connect tarps \n\
                                                            together with Long Grabbit also. A mix of Long Grabbits and EZ Grabbits will \n\
                                                            assure you can create the ultimate tarp city or protective cover.<br> \n\
                                                            <span class='viewTmpl_01CSS-A'><b>So when you go big, go Long Grabbit!</b>";
                                                            
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                        
                    case "view02":
                        child1Self.readAboutHeaderText  =  "Mini Grabbit";
                        child1Self.readAboutBodyText    =  "</span><br><a class='btnStyle2' href='https://www.tarptiedown.com/components/components00_03/tmpl_02/ttd-vn-mg-not-complete-msg.html'><b>Go To Mini Grabbit Pages</b></a><br> \n\
                                                            The Mini Grabbit tarp tie down is a miniature version of EZ Grabbit. It's length is \n\
                                                            a mere 1.625\" (40mm) but its mini size has a mighty hold. It is ideal for \n\
                                                            lightweight tarp and tent shelters and is intended for recreational users who travel \n\
                                                            lightly. One Mini Grabbit device weighs about an ounce (28g) which includes the 6' \n\
                                                            (183cm) long 1/8\" (3mm) dia. rope. There's no mount capability, but you get all the \n\
                                                            other great features of the EZ Grabbit but only in a miniature version.<br>"; 
                                                            
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;    
                    
                    case "view03":
                        child1Self.readAboutHeaderText  =  "EZ Adjust Rope Adjuster";
                        child1Self.readAboutBodyText    =  "</span><br><a class='btnStyle2' href='https://www.tarptiedown.com/ttd-vn/ttd-vn-eza/index-eza.html'><b>Go To EZ Adjust Pages</b></a><br> \n\
                                                            The EZ Adjust Rope Adjuster is perfect for use with ropes 1/8\" (3mm) diameter to 3/16\" \n\
                                                            (5mm) diameter. Use it to adjust lines on tents, canopies, tarps, tarp shelters, etc. \n\
                                                            Its open end design allows you to secure lines around trees, poles, ground stakes, and \n\
                                                            irregular shaped tie down points. Remarkably strong, it can withstand almost any line \n\
                                                            load a tent or a canopy would endure on a very windy day.<br>"; 
                                                            
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break; 
                        
                    case "view04":
                        child1Self.readAboutHeaderText  =  "RockBuster Ground Stake:";
                        child1Self.readAboutBodyText    =  "</span><br><a class='btnStyle2' href='https://www.tarptiedown.com/ttd-vn/ttd-vn-rb/index-rb.html'><b>Go To RockBuster Pages</b></a><br> \n\
                                                            The RockBuster is a 12\" ground stake specifically designed to secure rope lines to tents, \n\
                                                            tarps, canopies, and all other situations where anchoring ground lines is important. Rugged \n\
                                                            and reliable the RockBuster's straight fluted design holds the ground tight even when \n\
                                                            large spans of material are being secured. So if you're securing your tents, tarps, and \n\
                                                            canopies with Grabbits then anchor your lines to the ground with RockBusters and make sure \n\
                                                            your anchor points are not the weak link.<br>"; 
                                                            
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                        
                    case "view05":
                        child1Self.readAboutHeaderText  =  "Bag Grabbit Bag Handle:";
                        child1Self.readAboutBodyText    =  "</span><br><a class='btnStyle2' href='https://www.tarptiedown.com/components/components04_07/tmpl_05/ttd-vn-bg-not-complete-msg.html'><b>Go To Bag Grabbit Pages</b></a><br> \n\
                                                            <b>Close, carry and store bulky bags with ease!</b> <br>\n\
                                                            <span class='textStyle5 viewTmpl_05CSS-A'> \n\
                                                                &#9658; Works on all plastic bags and many multi-ply paper bags.<br> \n\
                                                                &#9658; Ideal for garden materials, pet food, ice melt, and more!<br> \n\
                                                                &#9658; Fold over top and attach handle for spill free storage.<br> \n\
                                                                &#9658; Safe to 50lbs of continuous load. ideal for hanging.<br> \n\
                                                                &#9658; Also works on tarps, plastic sheeting, and other materials.<br> \n\
                                                                &#9658; Use again and again, lasts a lifetime.<br><br> \n\
                                                            </span> \n\
                                                            The Bag Grabbit is made possible by attaching a custom made handle to the mount features on the EZ \n\
                                                            Grabbit and voila, a bag handle. If you already know the stand alone capabilities of the EZ Grabbit \n\
                                                            than you know the Bag Grabbit is the real deal. Additionally, you can use the Bag Grabbit as a pull \n\
                                                            handle for a drag tarp. ";  
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                        
                    case "view06":
                        child1Self.readAboutHeaderText  =  "The Keeper:";
                        child1Self.readAboutBodyText    =  "</span><br><a class='btnStyle2' href='https://www.tarptiedown.com/components/components04_07/tmpl_06/ttd-vn-kpr-not-complete-msg.html'><b>Go To Keeper Pages</b></a><br> \n\
                                                            The EZ Grabbit has two parts: the Dog Bone and Sleeve. The tarp is wrapped around the Dog Bone and \n\
                                                            the Sleeve is slid into place to engage. See instructions for both rope leader and surface mount \n\
                                                            applications. The Keeper adds an extra level of engagement by keeping the Dog Bone and Sleeve \n\
                                                            engaged regardless of circumstances or conditions. The Keeper comprises two engagement tabs \n\
                                                            connected by shock cord. The Keeper is stretched and inset into the ends of the EZ Grabbit between \n\
                                                            the Dog Bone and Sleeve. This keeps the Dog Bone and Sleeve engaged..";  
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                        
                    case "view07":
                        child1Self.readAboutHeaderText  =  "Carry Bag:";
                        child1Self.readAboutBodyText    =  "</span><br><a class='btnStyle2' href='https://www.tarptiedown.com/components/components04_07/tmpl_07/ttd-vn-cb-not-complete-msg.html'><b>Go To Carry Bag Pages</b></a><br> \n\
                                                            <span class='textStyle5 viewTmpl_07CSS-A'> \n\
                                                                &#9658; Carry all your Grabbits and accessories.<br> \n\
                                                                &#9658; Carry any appropriate gear.<br> \n\
                                                                &#9658; Rugged and reliable for use in the outdoors.<br> \n\
                                                                &#9658; 1.17m (46”) long X 23cm (9”) wide - Tubular Shape.<br> \n\
                                                                &#9658; Side Pocket for small items.<br><br> \n\
                                                            </span> \n\
                                                            Designed to carry heavy gear in the field.";  
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                        
                    case "view08":
                        child1Self.readAboutHeaderText  =  "Tent Poles:";
                        child1Self.readAboutBodyText    =  "</span><br><a class='btnStyle2' href='https://www.tarptiedown.com/components/components08_11/tmpl_08/ttd-vn-tp-not-complete-msg.html'><b>Go To Tent Pole Pages</b></a><br> \n\
                                                            <span class='textStyle5 viewTmpl_08CSS-A'> \n\
                                                                Qty 12 - 8mm dia. Tent Poles<br> \n\
                                                                &#9658; 10 tent poles with connectors.<br> \n\
                                                                &#9658; 2 tent poles without connectors.<br> \n\
                                                                &#9658; Poles are 24\" (60cm) long.<br> \n\
                                                                &#9658; Through holes in all poles for elastic cord.<br> \n\
                                                                &#9658; 24 feet (7.3m).<br><br> \n\
                                                            </span> \n\
                                                            These 8mm tent poles are great replacements but have additional uses when used in \n\
                                                            conjunction with our RockBuster ground stake among others.<br>Go to our store for \n\
                                                            <span class='textStyle5 viewTmpl_08CSS-A'><b><u>elastic cord.</u></b></span>";  
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false;
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                      
                    case "view09":
                        child1Self.readAboutHeaderText  =  "Classic EZ Grabbit:";
                        child1Self.readAboutBodyText    =  "</span><br><a class='btnStyle2' href='https://www.tarptiedown.com/ttd-vn/ttd-vn-ezg/index-ezg.html#/intro'><b>Go To EZ Grabbit Pages</b></a><br> \n\
                                                            The Classic EZ Gabbit is our non-mountable version. It does everything our \n\
                                                            standard EZ Grabbit does except it has no mounting points on the Dog Bone. \n\
                                                            Our non-mountable EZ Grabbits  were produced prior to our injection mold \n\
                                                            modification to produce our standard mountable EZ Grabbit. As always the \n\
                                                            performance of our non-mountable EZ Grabbit is as superior as our mountable \n\
                                                            EZ Grabbit.";  
                        child1Self.readAboutExtraStuff1 = false;
                        child1Self.readAboutExtraStuff2 = false;
                        child1Self.readAboutExtraStuff3 = false; 
                        child1Self.readAboutExtraStuff4 = false;
                        break;
                        
                    default:
                        console.log("No view match");
                        break;
                }
                
            }
            
                
            // Sets mode of the "NAVIGATE" button
            var btnText = NavMenuFactory.getBtnText();
            child1Self.display2 = false;
            child1Self.morelessText2 = btnText.showText;
            child1Self.moreless2 = function(){
                if(child1Self.morelessText2 === btnText.showText){
                    child1Self.morelessText2 = btnText.hideText;
                    child1Self.display2 = true;
                    var urlString = document.URL;
                    var queryParam = urlString.slice(urlString.search("#/")+2);
                    callMenu(queryParam);
                } 
                else {
                    child1Self.morelessText2 = btnText.showText;
                    child1Self.display2 = false;
                }
            }; 
            
            
            function callMenu(queryParam){
                var locationHighlight;
                switch(queryParam){
                    case "ttd":     locationHighlight = 0; break;
                    case "intro":   locationHighlight = 1; break;
                    case "buyprice":locationHighlight = 2; break;
                    case "products":locationHighlight = 3; break;
                    case "reviews": locationHighlight = 4; break;    
                    case "view00":  locationHighlight = 5; break; 
                    case "view01":  locationHighlight = 6; break; 
                    case "view02":  locationHighlight = 7; break; 
                    case "view03":  locationHighlight = 8; break; 
                    case "view04":  locationHighlight = 9; break; 
                    case "view05":  locationHighlight = 10; break;
                    case "view06":  locationHighlight = 11; break;
                    case "view07":  locationHighlight = 12; break;
                    case "view08":  locationHighlight = 13; break;
                    case "view09":  locationHighlight = 14; break;
                    case "view10":  locationHighlight = 15; break;
                    case "view11":  locationHighlight = 16; break;
                    default:console.log("From components-children.js file: There is no view match"); break;
                }
                    
                child1Self.navMenuHeader = NavMenuFactory.navMenuHeader();
                child1Self.navMenuBody = NavMenuFactory.getViewNav(locationHighlight); 
                
            }
            
                }]
        
    });
    
    