import {Router} from "express";
import specialtyControllers from "../controllers/specialtyControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaMiddleware.js";
import { specialtySchema } from "../schema/specialtySchemas.js";

const specialtyRoutes = Router();

specialtyRoutes.post("/", authMiddleware.authValidation, validateSchema(specialtySchema), specialtyControllers.specialty);

export default specialtyRoutes;