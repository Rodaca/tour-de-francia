import { getCiclistas,addCiclistas,deleteCiclistas,selectOne,updateCiclistas } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarCiclista();
})

const carta=document.querySelector('#carta');

async function cargarCiclista(){
    const datos = await getCiclistas();
    
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

const formCicli= document.querySelector("#formCiclista");
formCicli.addEventListener("submit", insert);

function insert(e) {/* nombreci,equipo_idci,edadci,nacionalidadci */
  e.preventDefault();
  const nombre = document.querySelector("#nombreci").value;
  const equipo_id = document.querySelector("#equipo_idci").value;
  const edad = document.querySelector("#edadci").value;
  const nacionalidad = document.querySelector("#nacionalidadci").value;
  
  const registro = {
    nombre,
    equipo_id,
    edad,
    nacionalidad
  };
  console.log(registro);
  if (validation(registro)) {
    alert("Todos los datos son obligatorios");
  }
  alert("Datos guardados correctamente.");
  return addCiclistas(registro);
};

function validation(Objeto) {
  return !Object.values(Objeto).every((element) => element !== "");
};



carta.addEventListener("click",borrar);

function borrar(e){
    if (e.target.classList.contains("eliminar")) {
        console.log(e.target);
        const idCategorias = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar esta categoria?");
        if (confir) {
            deleteCategoria(idCategorias);
        }
    }
}