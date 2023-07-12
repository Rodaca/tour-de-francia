import mongoose from "mongoose";

const schema = mongoose.Schema({ 
    nombre:{
        type:String,
        required:true,
        trim:true,
    },
    equipo_id:{
        type:String,
        required:true,
        trim:true,
    },
    edad:{
        type:String,
        required:true,
        trim:true,
    },
    nacionalidad:{
        type:String,
        required:true,
        trim:true,
    }
    
},
{
    timestamps:true,
});

const Ciclista = mongoose.model("ciclistas",schema);

export default Ciclista