var courseDb = require("./dbFiles/courseDB");
var courseStudyDb = require("./dbFiles/courseOfStudyDB");
var departmentDb = require("./dbFiles/departmentDB");
var facultyDb = require("./dbFiles/facultyDB");
var lecturerDb = require("./dbFiles/lecturerDB");

var Faculty = require("./dbObjects/faculty");
var Course = require("./dbObjects/course");
var CourseOfStudy = require("./dbObjects/courseOfStudy");
var Department = require("./dbObjects/department");
var Lecturer = require("./dbObjects/lecturer");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/faculties").get((request, response) => {
  facultyDb.getFaculties().then((data) => {
    response.json(data[0]);
  });
});

router.route("/faculties/:id").get((request, response) => {
  facultyDb.getFaculty(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/faculties").post((request, response) => {
  let faculty = { ...request.body };
  facultyDb.addFaculty(faculty).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/faculties").put((request, response) => {
  let faculty = { ...request.body };
  facultyDb.editFaculty(faculty).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/faculties/:id").delete((request, response) => {
  facultyDb.removeFaculty(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

//========================DEPARTMENTS
router.route("/departments").get((request, response) => {
    departmentDb.getDepartments().then((data) => {
      response.json(data[0]);
    });
  });
  
  router.route("/departments/:id").get((request, response) => {
    departmentDb.getDepartment(request.params.id).then((data) => {
      response.json(data[0]);
    });
  });
  
  router.route("/departments").post((request, response) => {
    let dept = { ...request.body };
    departmentDb.addDepartment(dept).then((data) => {
      response.status(201).json(data);
    });
  });
  
  router.route("/departments").put((request, response) => {
    let dept = { ...request.body };
    departmentDb.editDepartment(dept).then((data) => {
      response.status(200).json(data);
    });
  });
  
  router.route("/departments/:id").delete((request, response) => {
    departmentDb.removeDepartment(request.params.id).then((data) => {
      response.json(data[0]);
    });
  });
  
  // var port = process.env.PORT || 3006;
  // app.listen(port);
  // console.log("Academics API is runnning at " + port);

  var courseDb = require("./dbFiles/courseDB");
var courseStudyDb = require("./dbFiles/courseOfStudyDB");
var departmentDb = require("./dbFiles/departmentDB");
var facultyDb = require("./dbFiles/facultyDB");
var lecturerDb = require("./dbFiles/lecturerDB");

var Faculty = require("./dbObjects/faculty");
var Course = require("./dbObjects/course");
var CourseOfStudy = require("./dbObjects/courseOfStudy");
var Department = require("./dbObjects/department");
var Lecturer = require("./dbObjects/lecturer");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/faculties").get((request, response) => {
  facultyDb.getFaculties().then((data) => {
    response.json(data[0]);
  });
});

router.route("/faculties/:id").get((request, response) => {
  facultyDb.getFaculty(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/faculties").post((request, response) => {
  let faculty = { ...request.body };
  facultyDb.addFaculty(faculty).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/faculties").put((request, response) => {
  let faculty = { ...request.body };
  facultyDb.editFaculty(faculty).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/faculties/:id").delete((request, response) => {
  facultyDb.removeFaculty(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

//========================DEPARTMENTS
router.route("/departments").get((request, response) => {
  departmentDb.getDepartments().then((data) => {
    response.json(data[0]);
  });
});

router.route("/departments/:id").get((request, response) => {
  departmentDb.getDepartment(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/departments").post((request, response) => {
  let dept = { ...request.body };
  departmentDb.addDepartment(dept).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/departments").put((request, response) => {
  let dept = { ...request.body };
  departmentDb.editDepartment(dept).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/departments/:id").delete((request, response) => {
  departmentDb.removeDepartment(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

var port = process.env.PORT || 3006;
app.listen(port);
console.log("Academics API is runnning at " + port);


