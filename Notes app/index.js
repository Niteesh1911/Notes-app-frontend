const body = document.querySelector('body')
const signinsignupbutton = document.querySelector('.signin-signup')

window.addEventListener('load',() => {
body.classList.add("visible")

const token =localStorage.getItem("jwt");
if(token){
    location.href = "/pages/dashboard/dashboard.html";
}

});

signinsignupbutton.addEventListener('click',() => {
    location.href ='/pages/signinsignup/signinsignup.html'
});



