import joi from "joi";

export const userPatientSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi .string().required(),
    confirm_password: joi.string().valid(joi.ref('password')).required(),
    type: joi.string().valid('patient').required()
});

export const userDoctorSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi .string().required(),
    confirm_password: joi.string().valid(joi.ref('password')).required(),
    type: joi.string().valid('doctor').required(),
    street: joi.string().required(), 
    number: joi.number().required(), 
    complement: joi.string().min(4).required(), 
    postal_code: joi.string().max(11).required(), 
    name_city: joi.string().required(), 
    name_state: joi.string().required(), 
    name_speci: joi.string().required()
});