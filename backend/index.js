import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/config.js";
import ciclistasRouter from "./router/ciclistas.routes.js";
import equiposRouter from "./router/equipos.routes.js";
import etapasRouter from "./router/etapas.routes.js";
import premiosRouter from "./router/premios.routes.js";


const app =express();
const configCors = {
    methods:["GET", "POST", "PUT", "DELETE","PATCH"]
};
app.use(cors(configCors));
app.use(express.json());
app.use("/ciclista",ciclistasRouter);
app.use("/equipo",equiposRouter);
app.use("/etapa",etapasRouter);
app.use("/premio",premiosRouter);

dotenv.config();
const PORT =process.env.PORT;

conectarDB();


app.listen(PORT,()=>{
    console.log(`Server Wed listenning on port ${PORT}`);
})