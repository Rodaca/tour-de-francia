import mongoose from "mongoose";

const schema = mongoose.Schema({ 
    numero:{
        type:String,
        required:true,
        trim:true,
    },
    ciudad_inicio:{
        type:String,
        required:true,
        trim:true,
    },
    ciudad_fin:{
        type:String,
        required:true,
        trim:true,
    },
    distancia:{
        type:String,
        required:true,
        trim:true,
    }
    
},
{
    timestamps:true,
});

const Etapa = mongoose.model("etapas",schema);

export default Etapa