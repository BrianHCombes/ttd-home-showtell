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
    c:\xampp\htdocs\TTD-ViewNav-LG\ttd-vn-lg>git commit -m "Created a factory service for the navigate list. It's needed in almost every view so consolidating it to one location was needed."