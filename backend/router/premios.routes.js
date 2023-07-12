import express from "express";

import {actualizar,agregar,borrar,obtenerAll,obtenerOne} from "../controllers/premio.cotroller.js";

const router = express.Router();

router.get("/all",obtenerAll);
router.get("/one/:id",obtenerOne);
router.post("/add",agregar);
router.delete("/del/:id",borrar);
router.patch("/upd/:id",actualizar);

export default router;