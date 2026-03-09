let students=JSON.parse(localStorage.getItem("students"))||[];

let deletedStack=[];

let requestQueue=[];

const form=document.getElementById("studentForm");

const tableBody=document.getElementById("tableBody");

displayStudents();

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let roll=document.getElementById("roll").value;
let dept=document.getElementById("dept").value;
let marks=document.getElementById("marks").value;

let student={name,roll,dept,marks};

students.push(student);

localStorage.setItem("students",JSON.stringify(students));

displayStudents();

form.reset();

});

function displayStudents(){

tableBody.innerHTML="";

students.forEach((s,index)=>{

let row=`<tr>

<td>${s.roll}</td>
<td>${s.name}</td>
<td>${s.dept}</td>
<td>${s.marks}</td>

<td>
<button onclick="deleteStudent(${index})">Delete</button>
</td>

</tr>`;

tableBody.innerHTML+=row;

});

document.getElementById("studentCount").textContent=students.length;

}

function deleteStudent(index){

let deleted=students.splice(index,1)[0];

deletedStack.push(deleted);

localStorage.setItem("students",JSON.stringify(students));

console.log("Stack:",deletedStack);

displayStudents();

}

document.getElementById("searchBtn").addEventListener("click",function(){

let roll=document.getElementById("searchRoll").value;

let found=null;

for(let i=0;i<students.length;i++){

if(students[i].roll==roll){

found=students[i];

}

}

if(found){

alert("Student Found: "+found.name);

}else{

alert("Student Not Found");

}

});

document.getElementById("sortMarks").addEventListener("click",function(){

students.sort((a,b)=>a.marks-b.marks);

localStorage.setItem("students",JSON.stringify(students));

displayStudents();

console.log("Sorted by marks:",students);

});

document.getElementById("sortName").addEventListener("click",function(){

students.sort((a,b)=>a.name.localeCompare(b.name));

localStorage.setItem("students",JSON.stringify(students));

displayStudents();

});

function logout(){

localStorage.removeItem("loggedIn");

window.location.href="login.html";

}