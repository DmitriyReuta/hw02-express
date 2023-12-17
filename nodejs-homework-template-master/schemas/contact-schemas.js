import Joi from "joi";

export const contactAddSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": `"name" must be exist`
    }),
    phone: Joi.number().required(),
})

export const contactUpdateSchema = Joi.object({
    name: Joi.string(),
    phone: Joi.number(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
})