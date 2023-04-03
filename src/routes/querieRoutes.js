import {Router} from "express";
import querieControllers from "../controllers/querieControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const querieRoutes = Router();

querieRoutes.get("/name/:name", authMiddleware.authValidation, querieControllers.doctorFindName);
querieRoutes.get("/specialty/:specialty", authMiddleware.authValidation, querieControllers.doctorFindSpecialty);
querieRoutes.get("/location/:postal/:city?/:state?", authMiddleware.authValidation, querieControllers.doctorFindLocation);

export default querieRoutes;