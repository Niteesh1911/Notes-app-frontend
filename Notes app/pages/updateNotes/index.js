
const apiurl = "https://notes-backend-j2u2.onrender.com"; 
const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get("noteId");
console.log(noteId);

const updateNotebutton = document.querySelector(".create-note-button");  
const getNotesbutton = document.querySelector(".create-note-button");  
const deleteNoteButton = document.querySelector(".delete");

const token = localStorage.getItem("jwt");

const updateNotes = (array) => {
    cardContainer.innerHTML = "";


    array.forEach( cardObj => {
        const { heading , content} = cardObj;
        const id = cardObj.noteId;
        const card = document.createElement("div");

        card.classList.add("card");
        card.id = id;

        const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updateNotes/updateNotes.html?noteId=${id}"><div class="edit"><img class="edit-image" src="../../assets/edit.png" alt="edit"></div></a></div><div class="card-content">${content}</div>`;
        card.innerHTML = insideHtml;
    });
};

getNotesbutton.addEventListener("click", () => {
    console.log("clicked");
    const content = document.querySelector(".create-note-input").value;
    const heading = document.querySelector(".create-note-title").value;

    if (token) {

        fetch(`${apiurl}/note/getnotes/${noteId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
           
            })
            .catch((err) => {
                alert("Error in retrieving notes");
                console.log(err);
            });

    }


});

updateNotebutton.addEventListener("click",() => {
    const content = document.querySelector(".create-note-input").value;
    const heading = document.querySelector(".create-note-title").value;

    if(token){
        fetch(`${apiurl}/note/update/${noteId}`,{
            method :"PUT",
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
            alert("error updating notes please retry");
           
         });
    }
});


deleteNoteButton.addEventListener("click", () => {
    console.log("clicked");

    if (token) {

        fetch(`${apiurl}/note/delete/${noteId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                
                    location.href = "/pages/dashboard/dashboard.html";
            })
            .catch((err) => {
                alert("Error in deleting notes");
                console.log(err);
            });

    }


});




