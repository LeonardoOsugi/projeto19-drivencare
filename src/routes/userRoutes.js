import {Router} from "express";
import {validateSchema} from "../middlewares/schemaMiddleware.js";
import { userPatientSchema, userDoctorSchema } from "../schema/userSchemas.js";
import userControllers from "../controllers/userControllers.js";


const userRoutes = Router();

userRoutes.post('/signup-patient', validateSchema(userPatientSchema), userControllers.signup);
userRoutes.post('/signup-doctor', validateSchema(userDoctorSchema), userControllers.signupDoctor);
userRoutes.post('/signin', userControllers.signin);

export default userRoutes;

