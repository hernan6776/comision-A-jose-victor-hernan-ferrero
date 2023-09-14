
const contenedor = document.getElementById("container-row");
const btnCrear = document.getElementById("btn-new");
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
const btnSave = document.getElementById("btn-save");
const form = document.getElementById("formulario");

let html = '';
let option = '';

const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputPoster = document.getElementById("inputPoster");

btnCrear.addEventListener("click", () => {
    option = "new"
    btnSave.textContent = "New";
    inputTitle.value = "";
    inputDescription.value = "";
    inputPoster.value = "";
    myModal.show();
});

document.addEventListener("click", (event) => {
    if(event.target.matches("#btn-delete")){
        const article = event.target.closest(".col-4");
        const idArticle = article.dataset.id;
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/api/tasks/${idArticle}`,{
                    method: "DELETE"
                }).then(res =>{
                    if(res.ok){
                        article.remove()
                    }
                }).catch(err =>{
                    console.error(err)
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
})

// document.addEventListener("click", (event) => {
//     if(event.target.matches("#btn-delete")){
//         const article = event.target.closest(".col-4")
//         const idArticle = article.dataset.id
//      

//         fetch(`http://localhost:3000/api/tasks/${idArticle}`,{
//             method: "DELETE"
//         }).then(res =>{
//             if(res.ok){
//                 article.remove()
//             }
//         }).catch(err =>{
//             console.error(err)
//         })
//     }
// })

document.addEventListener("click", (event) => {
    if(event.target.matches("#btn-edit")){
        const article = event.target.closest(".col-4");

        const idArticle = article.dataset.id;
        const urlPosterEdit = article.children[0].children[0].src;
        const titleEdit = article.children[0].children[1].children[0].textContent;
        const descriptionEdit = article.children[0].children[1].children[1].textContent;

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
    console.log("Submit");

    if(option === "new") {
        const newTask = {
            title:inputTitle.value,
            description: inputDescription.value,
            url:inputPoster.value,
        };

        fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTask),
        }).then(res => {
            if (res.ok) {
                alert('Posteo Created Successfully');
                myModal.hide();
                location.reload();
            }
        });
    }   

    // if(option === "edit") {

    // }

});

fetch('http://localhost:3000/api/tasks')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(task => {
            html += `
            <article class="col-4 d-flex justify-content-center mb-3" data-id="${task.id}">
                <div class="card" style="width: 18rem;">
                    <img src="${task.poster}" class="card-img-top" alt="imagen de gente en un foro virtual debatiendo">
                    <div class="card-body">
                        <h5 class="card-title">${task.title}</h5>
                        <p class="card-text">${task.description}</p>
                        <div>
                            <button class="btn btn-success" id="btn-edit">Edit</button>
                            <button type="" class="btn btn-danger" id="btn-delete">Delete</button>
                        </div>
                    </div>
                </div>
            </article>
            `

            contenedor.innerHTML = html;
        });
    });