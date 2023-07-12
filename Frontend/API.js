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