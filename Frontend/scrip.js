import { getCiclistas } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarCategoria();
})

async function cargarCategoria(){
    const datos = await getCiclistas();
    const carta=document.querySelector('#carta');
    datos.forEach(element => {
        const {_id,nombre,equipo_id,edad,nacionalidad}=element;
        carta.innerHTML+=`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${edad}</h6>
                <p class="card-text">${equipo_id}</p>
                <p class="card-text">${nacionalidad}</p>
                <a href="#" class="btn btn-warning edit" id="${_id}" class="card-link">Editar</a>
                <a href="#" class="btn btn-danger delete" id="${_id}" class="card-link">Eliminar</a>
            </div>
        </div>
        `
    });
}