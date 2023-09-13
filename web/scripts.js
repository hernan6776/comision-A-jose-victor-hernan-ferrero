
const contenedor = document.getElementById("container-row")
let html = ''

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