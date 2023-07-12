import mongoose from "mongoose";

const schema = mongoose.Schema({ 
    nombre:{
        type:String,
        required:true,
        trim:true,
    },
    pais:{
        type:String,
        required:true,
        trim:true,
    }
    
},
{
    timestamps:true,
});

const Equipo = mongoose.model("equipos",schema);

export default Equipo