const apiurl = "https://notes-backend-j2u2.onrender.com";     

const signinform = document.querySelector(".signin-form");
signinform.addEventListener("submit",(event) =>{
    event.preventDefault();

    const email = document.querySelector(".signin-email").value;
 const password = document.querySelector(".signin-password").value;

 fetch(`${apiurl}/auth/signin`,{
    method :"POST",
    headers:{
        "content-Type": "application/json",  
    },
    body:JSON.stringify({ email: email, password: password}),
 }).then((res) => res.json()) 
 .then((data) => {
    const { token } = data;
    
    if(token){
        localStorage.setItem("jwt",token);
        location.href ="/pages/dashboard/dashboard.html";
    }else{
        alert("please signin again");
    }
 })
 .catch((err) =>{
    console.log("error signing in please retry");
 });
 
});





const signupform = document.querySelector(".signup-form");
    signupform.addEventListener("submit",(event) => {
 event.preventDefault();

 const email = document.querySelector(".signup-email").value;
 const name = document.querySelector(".signup-username").value;
 const password = document.querySelector(".signup-password").value;
 const retypedpassword = document.querySelector(".signup-confirmpass").value;

 if (password != retypedpassword){
    alert("passwords don't match enter your password correctly ");
    return;
 }
console.log(email ,name ,password);
 fetch(`${apiurl}/auth/signup`,{
    method :"POST",
    headers:{
        "content-Type": "application/json",  
    },
    body:JSON.stringify({name: name, email: email, password: password}),
 }).then((res) => res.json()) 
 .then((data) => {
    const { token } = data;
    
    if(token){
        localStorage.setItem("jwt",token);
        location.href ="/pages/dashboard/dashboard.html";
    }else{
        alert("Enter your Credential correctly");
    }
 })
 .catch((err) =>{
    console.log(err);
 });
});