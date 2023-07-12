import Equipo from "../models/Equipos.js";

const obtenerAll = async (req,res) =>{
    const datos =await Equipo.find();
    res.json(datos);

}
const obtenerOne = async (req,res) =>{
    try {
        const datos =await Equipo.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        res.status(404)
        res.send({error:"id no encontrada"})
    }
}

const agregar =async (req,res)=>{
    const datos =new Equipo(req.body);
    try {
        const nuevoDatos =await datos.save();
        res.json(nuevoDatos);
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req,res) =>{
    
    try {
        await Equipo.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"id no encontrada"})
    }
}

const actualizar = async (req,res)=>{
    try {
        const datos =await Equipo.findOne({_id:req.params.id})
        if(req.body.nombre){
            datos.nombre=req.body.nombre;
        }
        if(req.body.pais){
            datos.pais=req.body.pais;
        }
        await datos.save()
        res.send(datos)
    } catch (error) {
        res.status(404)
        res.send({error:"id no encontrada"})
    }
}

export {obtenerAll,obtenerOne,agregar,borrar,actualizar}