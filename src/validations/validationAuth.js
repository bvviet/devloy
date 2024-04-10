import Joi from "joi";

const registerValidate = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string(),
}).options({
    abortEarly: false,
});

const loginValidate = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}).options({
    abortEarly: false,
});

export { registerValidate, loginValidate };
