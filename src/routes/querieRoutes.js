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

querieRoutes.get("/consult-quirie-patient", authMiddleware.authValidation, querieControllers.consultQueriePacient);

querieRoutes.get("/consult-quirie-doctor", authMiddleware.authValidation, querieControllers.consultQuerieDoctor);

querieRoutes.put("/querie-confirm/:id", authMiddleware.authValidation, querieControllers.confirmQuirie);

querieRoutes.put("/querie-cancel/:id", authMiddleware.authValidation, querieControllers.cancelQuirie);

querieRoutes.put("/consultation-held/:id", authMiddleware.authValidation, querieControllers.consultationsHeld);

querieRoutes.put("/consultation-held-cancel/:id", authMiddleware.authValidation, querieControllers.consultationsHeldCancel);

querieRoutes.get("/view-history", authMiddleware.authValidation, querieControllers.history);

export default querieRoutes;