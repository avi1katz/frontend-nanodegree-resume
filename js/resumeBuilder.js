var bio = {
    "name":"Avi Katz",
    "role":"Timelord",
    "contacts":{
      "mobile":"574-323-5290",
      "email":"avi1katz@gmail.com",
      "twitter":"avi1katz",
      "github":"avi1katz",
      "location":"Austin"
    },
    "pic": "images/me.jpg",
    "msg": "Welcome to my Resume",
    "skills": ["SQL","teaching","eating","drinking","sleeping"],
    "display": function() {
      var formName = HTMLheaderName.replace("%data%",bio.name);
      var formRole = HTMLheaderRole.replace("%data%",bio.role);
      $("#header").prepend(formName+formRole);
      var formMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
      var formEmail = HTMLemail.replace("%data%",bio.contacts.email);
      var formTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
      var formGit = HTMLgithub.replace("%data%",bio.contacts.github);
      var formLoc = HTMLlocation.replace("%data%",bio.contacts.location);
      var formContacts = formMobile+formEmail+formTwitter+formGit+formLoc;
      $("#topContacts").append(formContacts);
      $("#footerContacts").append(formContacts);
      var formPic = HTMLbioPic.replace("%data%", bio.pic);
      var formMsg = HTMLwelcomeMsg.replace("%data%", bio.msg);
      $("#header").append(formPic+formMsg);
      if (bio.skills.length>0){
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(item){
            $("#skills").append(HTMLskills.replace("%data%",item));
          });
      }
    }
}

var work = {
  "jobs":
  [{"employer":"GM",
    "title":"Software Dev",
    "location":"Austin",
    "datesWorked":"April 2014 - Present",
    "description":"Implementing Kronos"
    },
    {"employer":"Big Idea",
     "title":"Counselor and Trainer",
     "location":"Israel",
     "datesWorked":"Summer 2013",
     "description":"Camp counselor and mobile dev teacher"
    }],
  "display": function(){
    for(job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
      var formLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      var formWork = formEmployer+formTitle+formDates+formLoc+formDesc;
      $(".work-entry:last").append(formWork);
    }
  }
};

var projects = {
  "projects":
  [{"title":"Ambassador Site",
    "dates":"Summer 2014",
    "description":"Revamp GM Ambassador site",
    "images":["images/fry.jpg", "images/fry.jpg"]
    },{
      "title":"Brazil Project",
      "dates":"2015-2017",
      "description":"Put GM Brazil on Kronos",
      "images":[]}
    ],
  "display": function(){
    for (project in projects.projects){
      $("#projects").append(HTMLprojectStart);
      var formTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
      var formDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
      var formDesc = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
      var formImg="";
      for (var img in projects.projects[project].images){
        formImg=formImg+HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
      }
      var formProj = formTitle+formDates+formDesc+formImg;
      $(".project-entry:last").append(formProj);
    }
  }
};

var education = {
  "schools":
  [{"name": "IU",
    "degree":"Bachelors of Science",
    "location": "Bloomington, IN",
    "degreeDates": "2010-2013",
    "majors":["CS","Business"],
    "url": "https://www.indiana.edu/",
    }],
  "onlineCourses":
  [{"title": "Javascript Basics",
    "school": "Udacity",
    "dates": "July 2016",
    "url": "udacity.com"
    }],
  "display": function(){
    for (school in education.schools){
      $("#education").append(HTMLschoolStart);
      var formName = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formDeg = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      var formDates = HTMLschoolDates.replace("%data%",education.schools[school].degreeDates);
      var formLoc = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      var formMaj = HTMLschoolMajor.replace("%data%",education.schools[school].majors.join(", "));
      $(".education-entry:last").append(formName+formDeg+formDates+formLoc+formMaj);              
    }
    for (course in education.onlineCourses){
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      var formTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
      var formSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
      var formDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
      var formURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
      $(".education-entry:last").append(formTitle+formSchool+formDates+formURL);              
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();


$("#main").append(internationalizeButton);

function inName(names){
  var namesArray = names.split(" ");
  var firstName=namesArray[0].slice(0,1).toUpperCase() + namesArray[0].slice(1).toLowerCase();
  var lastName=namesArray[1].toUpperCase();
  return firstName+" "+lastName;
}

$("#mapDiv").append(googleMap);
