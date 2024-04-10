import Joi from "joi";

const tripsValidate = Joi.object({
    fromStations: Joi.string().required().messages({
        "string.empty": "Điểm đi không được để trống",
    }),
    toStations: Joi.string().required().messages({
        "string.empty": "Điểm đến không được để trống",
    }),
    startTime: Joi.string().required().messages({
        "string.empty": "Thời gian không được để trống",
    }),
    seats: Joi.number().required().messages({
        "number.base": "Số ghế không được để trống",
    }),
    price: Joi.number().required().messages({
        "number.base": "Giá tiền không được để trống",
    }),
    busHouseId: Joi.required(),
}).options({
    abortEarly: false,
});

export default tripsValidate;
