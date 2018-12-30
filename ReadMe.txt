Project Date: 		06/01/2018

Project Title:          Project-TTD-Website-Rock-Buster-Final

Project Location:	Local:   C:\xampp\htdocs\Project-TTD-Website-Rock-Buster-Final\final
			Cloud: 
                                                                                                                               
Project Objective:      Have "View Nav" app ready for "Gitifying" and ready for content populating.

Project Catalyst:       Have finished View Nav framework and is now ready for cleanup and production.

Project References:     C:\xampp\htdocs\Project-TTD-Website-Rock-Buster-Final\AA-ReadMe.txt
                        C:\xampp\htdocs\Project-TTD-Website-Rock-Buster-LAMP\AA - ReadMe.txt

Project Security:        None


Process:

06/01/2018
    This project is all about preparing this Viewnav app for production as a 
    framework and content populating. Assuming all goes well, I'll be able to
    use the ViewNav app again and again for each product, for each issue, or
    for each bit of info as needed. It'll be about developer discretion. 

    It'll be reusable again and again and not just for TTD.

    I'll keep notes to a minimum and only log issues that will matter to
    future upgrades and improvements. The Viewnav app will be uploaded into
    a git repository when it's cleaned up enough and ready for use, 
    maintenence and upgrades. That should be within a few days.

    ***************************************************************************
    *****                          AHA!                                   *****
    ***** For reasons unknown (at this time) the jQuery lbrary:
    ***** <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js"></script> 
    ***** is required to allow for javascript to work in the HTML templates. The
    ***** wisdom of putting any code in the HTML templates rather than the
    ***** template's controllers is UNKNOWN. Be wary of doing so until more
    ***** is known.
    ***************************************************************************


08/19/2018

    These are the files I worked on in the LG view nav to consolidate the
    NAVIGATION List into a service. Mostly you add the service file and refer
    to it in the index file and set up the dependencies as needed in the 
    component modules.

    c:\xampp\htdocs\TTD-ViewNav-LG\ttd-vn-lg>git status
    On branch ng-repeat-test
    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        new file:   components/component-services.js
        deleted:    components/test.txt
        modified:   components/top_menu/intro/intro.html
        modified:   components/top_menu/top_menu.js
        modified:   components/top_menu/ttd/ttd.html
        modified:   index.html
        modified:   json-client.json
    c:\xampp\htdocs\TTD-ViewNav-LG\ttd-vn-lg>git commit -m "Created a factory service for the navigate list. 
    It's needed in almost every view so consolidating it to one location was needed."


12/03/2018

    Here's a link that helped me jump to bookmarks within a page.
    < https://stackoverflow.com/questions/20840986/angularjs-using-bookmarks >
    < https://docs.angularjs.org/api/ng/service/$anchorScroll#! >
    Where the path is defined as #/statename#bookmark. I used this first
    in the buyprice component where an example path is defined as:
    <a href="#/buyprice#EZGY">EZ Grabbit Yellow</a>


12/04/2018
    < CORS >
    Because I want to access the same template for all duplicated VN frameworks
    I started working on the CORS issue. At first I dealt with $sce from an
    AngularJS standpoint. Once that was fixed the CORS issue came up next.
    For the sake of time I am continuing production until I have time to resolve
    the CORS issue. Here's the links I have amassed so far:
    https://docs.angularjs.org/api/ng/provider/$sceDelegateProvider#resourceUrlWhitelist
    https://docs.angularjs.org/api/ng/service/$sce#impact-on-loading-templates
    https://stackoverflow.com/questions/23823010/how-to-enable-cors-in-angularjs
    https://enable-cors.org/
    https://www.html5rocks.com/en/tutorials/cors/
    https://humanwhocodes.com/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/
    Following added 12/29/2018
    https://github.com/hapijs/discuss/issues/451
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
    https://stackoverflow.com/questions/17756550/angularjs-cors-issues
    https://devblast.com/b/cors-with-angular-js-and-sinatra
    It should be noted once a given framework is uploaded to the host the CORS
    problem goes away since everything is under one roof.

    I have created a git branch called: < CORS_vnDev > but when this is revisited
    It'll be anybody's guess the status of this branch.

12/05/2018
    < PASSING DATA ON THE URL >
    Time to bone up on passing data on a URL. Seems simple so far and have already
    demonstrated passing data. Here's a great link that explains much.
    < https://www.quora.com/What-is-does-20-and-30-mean-in-URL >

12/09/2018
    < PASSING DATA ON THE URL >
    A complication has popped up. Long story short is to be able to clear the
    query string from the URL bar before issuing a new URL with query string.
    Some links won't work if a query string is already present even a fresh 
    URL with query string is sent. It works the first time but after a < view >
    is loaded a hash sign is appended and it won't go away. So looking for a
    fix.
    < https://www.experts-exchange.com/questions/21600459/How-to-remove-URL-Domain-name-from-windows-title-bar.html >

12/10/2018
    < PASSING DATA ON THE URL >
    ***************************************************************************
    *****                          AHA!                                   *****
    *****                  URL Fix for Passing Data                       *****
    ***************************************************************************
    In reference to the URL problem as discussed in the 12/09/2018 entry.
    I experimented and found the location object method 
    < window.location.assign(url) > sends a clean url with parameter and all
    works as desired. See:
    < https://www.w3schools.com/jsref/obj_location.asp > I'd still like to know
    why using href in the html page doesn't work but this fix allows me to keep
    going. But, I am still boning up on all things URL including the need to
    work with CORS.
