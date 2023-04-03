import {Router} from "express";
import querieControllers from "../controllers/querieControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaMiddleware.js";
import { querieSchema } from "../schema/querieSchemas.js";

const querieRoutes = Router();

querieRoutes.get("/name/:name", authMiddleware.authValidation, querieControllers.doctorFindName);

querieRoutes.get("/specialty/:specialty", authMiddleware.authValidation, querieControllers.doctorFindSpecialty);

querieRoutes.get("/location/:postal/:city?/:state?", authMiddleware.authValidation, querieControllers.doctorFindLocation);

querieRoutes.post("/insert-query", authMiddleware.authValidation, validateSchema(querieSchema),querieControllers.insertQuery);

export default querieRoutes;