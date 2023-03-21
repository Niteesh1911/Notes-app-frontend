const apiurl = "https://notes-backend-j2u2.onrender.com";    
const cardContainer = document.querySelector(".card-container");
const token = localStorage.getItem("jwt");
const logout = document.querySelector(".logout");

const createnotebutton = document.querySelector(".new-note");


logout.addEventListener("click" , () => {
    localStorage.removeItem("jwt");
    location.href ="/";
});

let cardData =[];

createnotebutton.addEventListener("click" ,() => {
   location.href = "/pages/createsNotes/createnote.html"
})

const createNotes = (array) => {
    cardContainer.innerHTML = "";


    array.forEach( cardObj => {
        const { heading , content} = cardObj;
        const id = cardObj.noteId;
        const card = document.createElement("div");

        card.classList.add("card");
        card.id = id;

        const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updateNotes/updateNotes.html?noteId=${id}"><div class="edit"><img class="edit-image" src="../../assets/edit.png" alt="edit"></div></a></div><div class="card-content">${content}</div>`;
        card.innerHTML = insideHtml;

        cardContainer.appendChild(card);
    });
};

const body = document.querySelector("body");

window.addEventListener("load" , () =>{
    body.classList.add("visible");

    if(token){

        fetch(`${apiurl}/note/getallnotes`,{
            method :"GET",
            headers:{
                'authorization' : token,
            },
         }).then((res) => res.json()) 
         .then((data) => {
           cardData = data.data;
           createNotes(data.data);
         })
         .catch((err) =>{
            console.log("error in fetching data please retry");
         });

    }

});