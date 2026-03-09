let generatedOTP;

function sendOTP(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){

generatedOTP=Math.floor(1000+Math.random()*9000);

alert("Your OTP is: "+generatedOTP);

document.getElementById("otpSection").style.display="block";

}else{

alert("Invalid login");

}

}

function verifyOTP(){

let entered=document.getElementById("otpInput").value;

if(entered==generatedOTP){

localStorage.setItem("loggedIn","true");

window.location.href="dashboard.html";

}else{

alert("Wrong OTP");

}

}