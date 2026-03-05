import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import ApiError from "../utils/ApiError.js";


const createNew = async (req, res, next) => {
  const correctionCondition = Joi.object({
    title: Joi.string().min(3).max(50).trim().strict().required(),
    content: Joi.string().min(3).strict().trim().required(),
    category: Joi.string().trim().required(),
    tags: Joi.array().required(),
  });
  try {
    console.log("Request body: ", req.body);
    await correctionCondition.validateAsync(req.body, { abortEarly: false });

    // phải gọi next để validation nhảy sang controller/service layer nếu không request sẽ treo
    next()
  } catch (error) {
    next(
        new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message)
    )
  }
};
export const blogValidation = {
    createNew
}