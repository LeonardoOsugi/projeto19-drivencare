import {Router} from "express";
import dateControllers from "../controllers/dateControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaMiddleware.js";
import { dateSchema } from "../schema/dateSchemas.js";

const dateRoutes = Router();

dateRoutes.post('/', authMiddleware.authValidation ,validateSchema(dateSchema) ,dateControllers.createDate);

export default dateRoutes;