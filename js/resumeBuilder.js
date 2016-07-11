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
    "skills": ["SQL","teaching","eating","drinking","sleeping"]};

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
    }]
};

var projects = {
  "projects":
  [{"title":"Ambassador Site",
    "dates":"Summer 2014",
    "description":"Revamp GM Ambassador site",
    "images":[],
    },
{"title":"Brazil Project",
    "dates":"2015-2017",
    "description":"Put GM Brazil on Kronos",
    "images":[],
    }]
};

var education = {
  "schools":
  [{"name": "IU",
    "location": "Bloomington, IN",
    "degreeDates": "2010-2013",
    "url": "https://www.indiana.edu/",
    }],
  "onlineCourses":
  [{"title": "Javascript Basics",
    "school": "Udacity",
    "dates": "July 2016",
    "url": "udacity.com"
    }]
};

if (bio.skills.length>0){
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(item){
      $("#skills").append(HTMLskills.replace("%data%",item));
    });
}

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
