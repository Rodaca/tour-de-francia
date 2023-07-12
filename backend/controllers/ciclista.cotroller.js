import Ciclista from "../models/Ciclistas.js";

const obtenerAll = async (req,res) =>{
    const datos =await Ciclista.find();
    res.json(datos);

}
const obtenerOne = async (req,res) =>{
    try {
        const datos =await Ciclista.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        res.status(404)
        res.send({error:"id no encontrada"})
    }
}

const agregar =async (req,res)=>{
    const datos =new Ciclista(req.body);
    try {
        const nuevoDatos =await datos.save();
        res.json(nuevoDatos);
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req,res) =>{
    
    try {
        await Ciclista.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"id no encontrada"})
    }
}

const actualizar = async (req,res)=>{
    try {
        const datos =await Ciclista.findOne({_id:req.params.id})
        if(req.body.nombre){
            datos.nombre=req.body.nombre;
        }
        if(req.body.equipo_id){
            datos.equipo_id=req.body.equipo_id;
        }
        if(req.body.edad){
            datos.edad=req.body.edad;
        }
        if(req.body.nacionalidad){
            datos.nacionalidad=req.body.nacionalidad;
        }
        await datos.save()
        res.send(datos)
    } catch (error) {
        res.status(404)
        res.send({error:"id no encontrada"})
    }
}

export {obtenerAll,obtenerOne,agregar,borrar,actualizar}