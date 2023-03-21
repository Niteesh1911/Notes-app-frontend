const createNotebutton = document.querySelector(".create-note-button");

const apiurl = "https://notes-backend-j2u2.onrender.com";    



const token = localStorage.getItem("jwt");

createNotebutton.addEventListener("click",() => {
    const content = document.querySelector(".create-note-input").value;
    const heading = document.querySelector(".create-note-title").value;

    if(token){
        fetch(`${apiurl}/note/add`,{
            method :"POST",
            headers:{
                "content-Type": "application/json",  
                authorization : token,
            },
            body:JSON.stringify({ content, heading}),
         })
         .then((res) => res.json()) 
         .then((data) => {
            if(data.message){
                location.href ="/pages/dashboard/dashboard.html"; 
            }
         })
         .catch((err) =>{
            console.log(err);
            alert("error creating notes please retry");
           
         });
    }
});


