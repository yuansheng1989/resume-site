// JSON Objects
var bio = {
	"name": "Yuansheng Lu",
	"role": "Software Developer / Web Developer",
	"contacts": {
		"mobile": "647-331-8498",
		"email": "ylu140@myseneca.ca",
		"github": "yuansheng1989",
		"twitter": "@yuansheng1989",
		"location": "Toronto, ON" 
	},
	"welcomeMessage": "Welcome to my resume!!",
	"skills": [
		"HTML", "CSS", "JavaScript", "C", "C++", "Node.js", "SQL", "Shell Scripting", "DB2", "Oracle"
	],
	"bioPic": "images/profile_pic.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "Seneca College",
			"location" : "Toronto, ON",
			"degree" : "diploma",
			"major" : ["Computer Programming and Analysis"],
			"dates" : 2017,
			"url" : "http://www.senecacollege.ca/"
		},
		{
			"name" : "Shenzhen University",
			"location" : "Shenzhen, China",
			"degree" : "Bachelor",
			"major" : ["Biomedical Engineering"],
			"dates" : 2009,
			"url" : "http://www1.szu.edu.cn/2014/en/"
		} 	
	],
	"onlineCourses" : [
		{
			"title" : "Web Programming Principles",
			"school" : "Seneca College",
			"dates" : 2017,
			"url" : "http://www.senecacollege.ca/cgi-bin/subject?s1=WEB222"
		},
		{
			"title" : "Web Programming Tools and Framework",
			"school" : "Seneca College",
			"dates" : 2017,
			"url" : "http://www.senecacollege.ca/cgi-bin/subject?s1=WEB322"
		},
		{
			"title" : "Introduction to Programming Using C",
			"school" : "Seneca College",
			"dates" : 2017,
			"url" : "http://www.senecacollege.ca/cgi-bin/subject?s1=IPC144"
		},
		{
			"title" : "Introduction to Object Oriented Programming",
			"school" : "Seneca College",
			"dates" : 2017,
			"url" : "http://www.senecacollege.ca/cgi-bin/subject?s1=OOP244"
		},
		{
			"title" : "Object-Oriented Software Development Using C++",
			"school" : "Seneca College",
			"dates" : 2017,
			"url" : "http://www.senecacollege.ca/cgi-bin/subject?s1=OOP345"
		},
		{
			"title" : "Introduction to Database Design and SQL",
			"school" : "Seneca College",
			"dates" : 2017,
			"url" : "http://www.senecacollege.ca/cgi-bin/subject?s1=DBS201"
		},
		{
			"title" : "Database Design II and SQL Using OracleL",
			"school" : "Seneca College",
			"dates" : 2017,
			"url" : "http://www.senecacollege.ca/cgi-bin/subject?s1=DBS301"
		},
		{
			"title" : "Introduction to UNIX/Linux and the Internet",
			"school" : "Seneca College",
			"dates" : 2017,
			"url" : "http://www.senecacollege.ca/cgi-bin/subject?s1=ULI101"
		},
		{
			"title" : "Data Communications Fundamentals",
			"school" : "Seneca College",
			"dates" : 2017,
			"url" : "http://www.senecacollege.ca/cgi-bin/subject?s1=DCF255"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Dalhousie University",
			"title" : "Teaching assistant of the course (Digital Control System)",
			"location": "Halifax, NS",
			"dates" : "September 2015 - December 2015",
			"description" : "Lead students' Lab course and tutor the students if they have difficulities in their lab. After the lab, mark the stuents' lab reports."			
		},
		{
			"employer" : "Dalhousie University",
			"title" : "Marker of the course (Digital Control System)",
			"location": "Halifax, NS",
			"dates" : "September 2014 - December 2014",
			"description" : "Mark students' assignments and tutor the students if they have difficulities in their assignments."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Portfolio Site",
			"dates" : "2017",
			"description" : "Used HTML, CSS and JavaScript to build up a portfolio webpage and applied Bootstrap to make it responsive",
			"images" : [
				"images/project1_1.png",
				"images/project1_2.png"
			]
		},
		{
			"title" : "Resume Site",
			"dates" : "2017",
			"description" : "Manipulate and traversed the DOM using jQuery; Stored the resume data in JavaScript objects; Used Google Map API",
			"images" : [
				"images/project2_1.png",
				"images/project2_2.png"
			]
		}		
	]
};

/* %data% represents the placeholder in helper.js */

// Encapsulated Functions
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedName + formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);	
	$("#header").append(formattedBioPic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcome);
	$("#header").append(HTMLskillsStart);
    for (var i in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }	
} 

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);		 
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		for (image in projects.projects[project].images) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
}

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		formattedName = formattedName.replace("#",education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);	
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);	
	    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	    $(".education-entry:last").append(formattedLocation);			
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajors);
		$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
	}
	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for (var course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
		}
	}
}

bio.contact = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);
}

//Execute the functions
work.display();
bio.display();
projects.display();
education.display();
bio.contact();

//Google map JavaScript API
$("#mapDiv").append(googleMap);