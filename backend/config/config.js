import mongoose from "mongoose";

const conectarDB=async ()=>{
    try {
        const coneccionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        const url =`Conetado a MongoDB en SERVE ${coneccionDB.connection.host} - En puerto:${coneccionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;