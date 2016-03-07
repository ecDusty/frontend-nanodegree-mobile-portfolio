//BIO OBJECT GROUP
var bio = {
    "name" : "Erin Mulligan",
    "role" : "Web Developer Guru",
    "contacts" : {
        "mobile" : "+852-1111-1234",
        "github" : "emulliganator",
        "email" : "mullig.erin@myemail.com",
        "twitter" : "@mulliganec",
        "location" : "Mid-Levels, Hong Kong"
    },
    "WelcomeMsg" : "Learn about how I can help you.",
    "skills" : [
        "Adobe Program Suite (PS, AI, LR)",
        "Pilot",
        "Front End Web Developement",
        "E-Commerce Manager"
    ],
    "bioPic" : "images/fry.jpg",
    "display" : function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedMob = HTMLmobile.replace("%data%", bio.contacts.mobile);

        var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").prepend(formattedLoc);

        var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").prepend(formattedTwit);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").prepend(formattedGithub);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").prepend(formattedEmail);

        var formattedWelMsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMsg);
        $("#topContacts").prepend(formattedMob);

        $("#footerContacts").prepend(formattedLoc);

        $("#footerContacts").prepend(formattedTwit);

        $("#footerContacts").prepend(formattedGithub);

        $("#footerContacts").prepend(formattedEmail);

        $("#footerContacts").prepend(formattedMob);

        var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPic);

        var formattedListStart = HTMLskillsStart.replace("box", "list");
        $("#header").append(formattedWelMsg);

        if (bio.skills.length > 0) {
            $("#header").append(formattedListStart);

            for (var skill in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").prepend(formattedSkill);
            }
        }
        $("#header").append(buttonContainer);

        $(".button-box").append(usaButton);

        $(".button-box").append(internationalizeButton);
    }
};

//WORK OBJECT GROUP
var work = {
    "jobs" : [
        {
            "employer" : "Wine Shop Asia Co. Ltd.",
            "url" : "http://www.wineshopasia.com",
            "title" : "E-Commerce Manager",
            "location" : "200 Gloucester Road, Wan Chai, Hong Kong",
            "dates" : "October 2012 - October 2014",
            "description" : "Here is where I discuss the great things I learned and did while working as a manager in the Relm of E-Commerce. The Almost imposible challenges I over came, quests I completed, Wine I defeated. Though I wont, You'll just have to meet me in person for the great details!"

        },
        {
            "employer" : "AH Editing",

            "url" : "http://www.ahediting.com",
            "title" : "Workflow Manager",
            "location" : "99 Hennessy Road, Wan Chai, Hong Kong",
            "dates" : "October 2014 - Current",
            "description" : "Here is where I plagiarize my previous text out of lazyness, and also forget to remove the obvious repeated starting sentence. Here is where I discuss the great things I learned and did while working as a manager in the Relm of Academic Editing. The Almost imposible challenges I over came, quests I completed, Papers I defeated. Though I wont, You'll just have to meet me in person for the great details!"
        }
    ],
    "display" : function() {
        if (work.jobs.length > 0) {
            for (var job in work.jobs) {
                $("#workExperience").append(HTMLworkStart);

                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);

                var formattedEmployedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $(".work-entry:last").append(formattedEmployedDates);

                var formattedEmployerLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                $(".work-entry:last").append(formattedEmployerLocation);

                var formattedJobDescrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedJobDescrip);
            }
        }
    }
};

//PROJECTS OBJECT GROUP
var projects = {
    "projects" : [
        {
            "title" : "Front End Web Developer Project 1",
            "dates" : "Jan 2015",
            "description" : "Here is where I discuss the great things I learned and did while working as a manager in the Relm of HTML and CSS Programing. The Almost imposible challenges I over came, quests I completed, Styles I defeated. Though I wont, You'll just have to meet me in person for the great details!",
            "images" : [
                "images/197x148Proj1.jpg",
                "images/197x148.gif"
            ],
            "url" : "http://www.udacity.com"
        },
        {
            "title" : "Front End Web Developer Project 2",
            "dates" : "Feb 2015",
            "description" : "Here is where I discuss the great things I learned and did while working as a manager in the Relm of Javascript & JQuery Programing. The Almost imposible challenges I over came, quests I completed, Syntax I defeated. The great number of times my mind exploded (Anyone could guess this... too many). Though I wont, You'll just have to meet me in person for the great details!",
            "images" : [
                "images/197x148-Coding-Proj-2.jpg",
                "images/197x148-Webpage-Proj2.jpg"
            ],
            "url" : "http://www.udacity.com"
        }
    ],
    "display" : function() {
        if (projects.projects.length > 0) {
            for (var project in projects.projects) {
                $("#projects").append(HTMLprojectStart);

                var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
                $(".project-entry:last").append(formattedProjTitle);

                var formattedProjDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                $(".project-entry:last").append(formattedProjDate);

                var formattedProjDescript = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
                $(".project-entry:last").append(formattedProjDescript);

                if (projects.projects[project].images.length > 0) {
                    for (var image in projects.projects[project].images) {
                        var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedProjImage);
                    }
                }
            }
        }
    }
};

//EDUCATION OBJECT GROUP
var education = {
    "schools" : [
        {
            "name" : "Purdue University",
            "location" : "West Lafayette, IN",
            "degree" : "BoS",
            "majors" : [
                "Professional Flight Technology"
            ],
            "dates" : "May, 2010",
            "url" : "http://www.purdue.edu/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-End Web Developer Nanodegree",
            "school" : "Udacity",
            "date" : "July, 2015",
            "url" : "http://www.udacity.com/"
        },
        {
            "title" : "CompTIA A+",
            "school" : "ITPro-TV",
            "date" : "November, 2014",
            "url" : "http://www.itpro.tv/"
        }
    ],
    "display" : function() {
        if (education.schools.length > 0) {
            for (var school in education.schools) {
                $("#education").append(HTMLschoolStart);

                var formattedSchoolFullTitle = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                $(".education-entry:last").append(formattedSchoolFullTitle);

                var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates)
                $(".education-entry:last").append(formattedSchoolDate);

                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)
                $(".education-entry:last").append(formattedSchoolLocation);

                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }

        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);

            for (var online in education.onlineCourses) {
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).replace("#", education.onlineCourses[online].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
                $(".education-entry:last").append(formattedOnlineTitle);

                var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
                $(".education-entry:last").append(formattedOnlineDate);

                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url).replace("#", education.onlineCourses[online].url);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
    }
};


/* International and USA Name Standards Button Functions */
function inName() {
    var name = bio.name.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    bio.name = name[0] + " " + name[1];
    return bio.name;
}
function usName() {
    var name = bio.name.split(" ");
    name[1] = name[1].slice(0, 1).toUpperCase() + name[1].slice(1).toLowerCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    bio.name = name[0] +" "+ name[1];
    return bio.name;
}

/* HEADER INFO */
bio.display();

/* WORK EXPERIENCE */
work.display();

/* PROJECTS */
projects.display();

/* EDUCATION */
education.display();


/* THE MAP */
$("#mapDiv").append(googleMap);