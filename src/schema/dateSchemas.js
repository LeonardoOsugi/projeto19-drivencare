import joi from "joi";

export const dateSchema = joi.object({
    date_disp: joi.date().min('now').required(),
    time_disp: joi.string().required()
})