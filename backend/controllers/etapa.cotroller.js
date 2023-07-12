import Etapa from "../models/Etapas.js";

const obtenerAll = async (req,res) =>{
    const datos =await Etapa.find();
    res.json(datos);

}
const obtenerOne = async (req,res) =>{
    try {
        const datos =await Etapa.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        res.status(404)
        res.send({error:"id no encontrada"})
    }
}

const agregar =async (req,res)=>{
    const datos =new Etapa(req.body);
    try {
        const nuevoDatos =await datos.save();
        res.json(nuevoDatos);
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req,res) =>{
    
    try {
        await Etapa.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"id no encontrada"})
    }
}

const actualizar = async (req,res)=>{
    try {
        const datos =await Etapa.findOne({_id:req.params.id})
        if(req.body.numero){
            datos.numero=req.body.numero;
        }
        if(req.body.ciudad_inicio){
            datos.ciudad_inicio=req.body.ciudad_inicio;
        }
        if(req.body.ciudad_fin){
            datos.ciudad_fin=req.body.ciudad_fin;
        }
        if(req.body.distancia){
            datos.distancia=req.body.distancia;
        }
        await datos.save()
        res.send(datos)
    } catch (error) {
        res.status(404)
        res.send({error:"id no encontrada"})
    }
}

export {obtenerAll,obtenerOne,agregar,borrar,actualizar}