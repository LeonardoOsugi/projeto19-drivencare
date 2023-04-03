import {Router} from "express";
import dateRoutes from "./dateRoutes.js";
import querieRoutes from "./querieRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();
routes.use('/users',userRoutes);
routes.use('/dates', dateRoutes);
routes.use('/querie', querieRoutes);

export default routes;