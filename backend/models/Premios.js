import mongoose from "mongoose";

const schema = mongoose.Schema({ 
    nombre:{
        type:String,
        required:true,
        trim:true,
    },
    descripcion:{
        type:String,
        required:true,
        trim:true,
    }
    
},
{
    timestamps:true,
});

const Premio = mongoose.model("premios",schema);

export default Premio