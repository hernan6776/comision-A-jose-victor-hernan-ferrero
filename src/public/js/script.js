
const contenedor = document.getElementById("container-row");
const btnCrear = document.getElementById("btn-new");
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
const btnSave = document.getElementById("btn-save");
const form = document.getElementById("formulario");

let html = '';
let option = '';
let idForm = '';

const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputPoster = document.getElementById("inputPoster");

btnCrear.addEventListener("click", () => {
    option = "new"
    btnSave.textContent = "new";
    inputTitle.value = "";
    inputDescription.value = "";
    inputPoster.value = "";
    myModal.show();
});

document.addEventListener("click", (event) => {
    if(event.target.matches("#btn-delete")){
        const article = event.target.closest(".col-4");
        const idArticle = article.dataset.id;
        
                fetch(`http://localhost:3002/api/forums/${idArticle}`,{
                    method: "DELETE"
                }).then(res =>{
                    if(res.ok){
                        article.remove()
                    }
                }).catch(err =>{
                    console.error(err)
                })
        }
    })


document.addEventListener("click", (event) => {
    if(event.target.matches("#btn-edit")){
        const article = event.target.closest(".col-4");

        const idArticle = article.dataset.id;
        const urlPosterEdit = article.children[0].children[0].src;
        const titleEdit = article.children[0].children[1].children[0].textContent;
        const descriptionEdit = article.children[0].children[1].children[1].textContent;

        idForm = idArticle;
        inputTitle.value = titleEdit;
        inputDescription.value = descriptionEdit;
        inputPoster.value = urlPosterEdit;
        option = "edit";
        btnSave.textContent = "edit";
        myModal.show();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if(option === "new") {
        const newForum = {
            title:inputTitle.value,
            description: inputDescription.value,
            poster:inputPoster.value,
        };

        fetch('http://localhost:3002/api/forums', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newForum),
        }).then(res => {
            if (res.ok) {
                alert('Posteo Created Successfully');
                myModal.hide();
                location.reload();
            }
        });
    }   

    if(option === "edit") {
        const newForum = {
            title:inputTitle.value,
            description: inputDescription.value,
            poster:inputPoster.value,
        };

        fetch(`http://localhost:3002/api/forums/${idForm}`,{
        method: 'PUT',
        headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify(newForum)
            }).then(res => {
                if(res.ok) {
                    alert('Posteo Edit Successfully')
                    myModal.hide();
                    location.reload();
                }
            })
        }
    });