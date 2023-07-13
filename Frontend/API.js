const url="http://localhost:5001/ciclista/"

export const getCiclistas = async ()=>{
    try {
        const dato = await fetch(url+"all",{
            method:"GET"});
        const datoJson = dato.json();
        return datoJson;
    } catch (error) {
        console.log(error);
    }
}



export const addCiclistas = async (registro) => {
    try {
      await fetch(`${url+"add"}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "index.html";
    } catch (error) {
        console.log(error);
    }
};

export const deleteCiclistas = async (id) =>{
    try {
        await fetch(`${url}del/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};

//Read One
export async function selectOne(id) {
    try {
        const response = await fetch(`${url}one/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Update
export async function updateCiclistas(data,id){
    try {
            await fetch(`${url}upd/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "ndex.html"
    } catch (error) {
        console.log(error);
    }
};