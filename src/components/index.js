// SELECTING all elements ////////////////////

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const group = document.getElementById("group");
const doesWork = document.getElementById("doesWork");

const firstNameEdit = document.getElementById("firstNameEdit");
const lastNameEdit = document.getElementById("lastNameEdit");
const groupEdit = document.getElementById("groupEdit");
const doesWorkEdit = document.getElementById("doesWorkEdit");

const search = document.getElementById("search");
const filterSelect = document.getElementById("filter-select");
const studentsList = document.getElementById("students-list");
const btnAddStudent = document.getElementById("btn-add-student");
const btnEditStudent = document.getElementById("btn-edit-student");

let students = JSON.parse(localStorage.getItem("students")) || [];

// DISPLAY ALL STUDENTS  //////////////
function displayStudents(students) {
  let str = "";
  students.map((student, i) => {
    str += `
    <tr>
      <td>${i + 1}</td>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.group}</td>
      <td>${student.doesWork ? "Ha" : "Yo'q"}</td>
      <td>
        <button class="btn btn-warning btn-sm" data-bs-toggle="modal"
        data-bs-target="#editModal" onclick="editStudent(${
          student.id
        })">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteStudent(${
          student.id
        })">Delete</button>
      </td>
    </tr>
    `;
  });
  studentsList.innerHTML = str;
}
displayStudents(students);

// ADD NEW STUDENT   ////////////////
function addStudent() {
  const student = {
    id: students.length + 1,
    firstName: firstName.value,
    lastName: lastName.value,
    group: group.value,
    doesWork: doesWork.checked,
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
  location.reload();

  firstName.value = "";
  lastName.value = "";
  group.value = "REACT N32";
  doesWork.checked = false;
}
btnAddStudent.addEventListener("click", addStudent);

// DELETE STUDENT   //////////////////
function deleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    let newStudents = students.filter((std) => std.id !== id);

    localStorage.setItem("students", JSON.stringify(newStudents));
    location.reload();
  }
}

// EDIT STUDENT  //////////////////
let studentEditing = {};
function editStudent(id) {
  let student = students.find((student) => student.id === id);
  studentEditing = student;

  firstNameEdit.value = student.firstName;
  lastNameEdit.value = student.lastName;
  groupEdit.value = student.group;
  doesWorkEdit.checked = student.doesWork;
}

// UPDATE STUDENT //////////////////
function updateStudent() {
  const student = {
    id: studentEditing.id,
    firstName: firstNameEdit.value,
    lastName: lastNameEdit.value,
    group: groupEdit.value,
    doesWork: doesWorkEdit.checked,
  };

  let newStudents = students.map((st) => (st.id === student.id ? student : st));

  localStorage.setItem("students", JSON.stringify(newStudents));
  location.reload();
}
btnEditStudent.addEventListener("click", updateStudent);

// FILTER STUDENTS ///////////////////
filterSelect.addEventListener("change", function (e) {
  let grp = e.target.value;
  let newStudentsList = [];
  if (grp === "ALL") {
    newStudentsList = students;
  } else {
    newStudentsList = students.filter((st) => st.group === grp);
  }
  displayStudents(newStudentsList);
});

// SEARCH STUDENTS //////////////////
search.addEventListener("input", function (e) {
  let text = e.target.value;
  let newSearchedList = [];
  if (text === "") {
    newSearchedList = students;
  } else {
    newSearchedList = students.filter(
      (st) =>
        st.firstName.toLowerCase().includes(text.toLowerCase()) ||
        st.lastName.toLowerCase().includes(text.toLowerCase())
    );
  }
  displayStudents(newSearchedList);
});
