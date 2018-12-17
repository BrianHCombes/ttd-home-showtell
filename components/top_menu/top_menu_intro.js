angular.module("viewNav")
    .component('intro', {
        
        templateUrl: 'components/top_menu/intro/intro.html',
       
        controller: ['GetSet', 'viewManager', function(GetSet, viewManager){
            var viewWidth = GetSet.getViewWidth();
                
            var introSelf = this;

            // AR Section 1
            introSelf.rs1fontsize1 = "font-size:" + ((0.00123)*(viewWidth)+0.55556) + "em";             /* AR_1.99_1.00 */
            
            // AR Section 2
            introSelf.rs2width1 = "width:" + ((-0.03086)*(viewWidth)+66.11111) + "%";                   /* AR_30_55 */
            introSelf.rs2fontsize4 = "font-size:" + ((0.00062)*(viewWidth)+0.52778) + "em";             /* AR_1.25_0.75 */
            introSelf.rs2margintop2 = "margin-top:" + ((0.02469)*(viewWidth)-8.88889) + "px";           /* AR_20.00_-0.00 */
            introSelf.rs2fontsize5 = "font-size:" + ((0.00074)*(viewWidth)+0.43333) + "em";             /* AR_1.30_0.70 */
            introSelf.rs2width2 = "width:" + ((0.02469)*(viewWidth)+41.11111) + "%";
            introSelf.rs2fontsize6 = "font-size:" + ((0.00136)*(viewWidth)+0.41111) + "em";             /* AR_2.00_0.90 */
            introSelf.rs2margin1 = "margin:" + ((0.01728)*(viewWidth)+3.77778) + "px";                  /* AR_24.00_10.00 */
            introSelf.rs2margintop1 = "margin-top:" + ((0.01852)*(viewWidth)-1.66667) + "px";           /* AR_20.00_5.00 */
            introSelf.rs2borderwidth1 = "border-width:" + ((0.00118)*(viewWidth)+0.62353) + "px";       /* AR_2.00_1.05 */
            introSelf.rs2fontweight1 = "font-weight:" + ((-0.98765)*(viewWidth)+1255.55556);            /* AR_100.01_900.00 */
            introSelf.rs2padding1 = "padding:" + ((0.00988)*(viewWidth)-1.55556) + "px 0px";            /* AR_10.00_2.00 */
            
            // AR Section 3
            introSelf.rs3fontsize1 = "font-size:" + ((0.00077)*(viewWidth)+0.59722) + "em";         /* AR_1.50_0.87 */
            introSelf.rs3width1 = "width:" + ((0.01852)*(viewWidth)+53.33333) + "%";         /* AR_1.50_0.87 */
            
            
            // AR Section 4
            introSelf.rs4fontsize1 = "font-size:" + ((0.00065)*(viewWidth)+0.49294) + "em";         /* AR_1.25_0.73 */
            
            viewManager.topMenuToHighlight(1);    
            
        }]
    });