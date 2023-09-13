
const contenedor = document.getElementById("container-row")
const btnCrear = document.getElementById("btn-new")
const myModal = new bootstrap.Modal(document.getElementById('myModal'))
const btnSave = document.getElementById("btn-save")

let html = ''
let option = ''

const inputTitle = document.getElementById("inputTitle")
const inputDescription = document.getElementById("inputDescription")
const inputPoster = document.getElementById("inputPoster")

btnCrear.addEventListener("click", () => {
    option = "new"
    btnSave.textContent = "New"
    inputTitle.value = ""
    inputDescription.value = ""
    inputPoster.value = ""
    myModal.show()
})

fetch('http://localhost:3000/api/tasks')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(task => {
            html += `
            <article class="col-4 d-flex justify-content-center mb-3" data-id="${task.id}">
                <div class="card" style="width: 18rem;">
                    <img src="${task.poster}" class="card-img-top" alt="imagen de gente en un foro virtual debatiendo">
                    <div class="card-body">
                        <h5 class="card-title">${task.title}</h5>
                        <p class="card-text">${task.description}</p>
                        <div>
                            <button href="#" class="btn btn-success">Edit</button>
                            <button href="#" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </article>
            `

            contenedor.innerHTML = html;
        });
    })