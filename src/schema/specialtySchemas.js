import joi from "joi";

export const specialtySchema = joi.object({
    name: joi.string().required()
})