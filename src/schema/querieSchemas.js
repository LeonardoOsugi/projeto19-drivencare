import joi from "joi";

export const querieSchema = joi.object({
    date: joi.date().min('now').required(),
    time: joi.string().required()
})