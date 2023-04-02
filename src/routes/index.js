import {Router} from "express";
import dateRoutes from "./dateRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();
routes.use('/users',userRoutes);
routes.use('/dates', dateRoutes);

export default routes;