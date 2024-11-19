import { asyncHandler } from '../utils/asyncHandler.js';
import Joi from 'joi';
import { ProductMaster } from '../models/productMaster.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';

// Joi schema for validation
const productMasterValidationSchema = Joi.object({
  skuNo: Joi.string().required(),
  itemDescription: Joi.string().required(),
  division: Joi.string().required(),
  product: Joi.string().required(),
  brand: Joi.string().optional(),
  style: Joi.string().required(),
  colorCode: Joi.string().optional(),
  size: Joi.string().required(),
  sleeves: Joi.string().optional(),
  supplier: Joi.string().required(),
  articleNo: Joi.string().required(),
  colorName: Joi.string().required(),
  pattern: Joi.string().required(),
  type: Joi.string().required(),
  pkt: Joi.string().required(),
  fit: Joi.string().required(),
  hsnCode: Joi.string().required(),
  gstGroup: Joi.number().optional(),
  costPrice: Joi.number().required(),
  retailPrice: Joi.number().required(),
  mrp: Joi.number().required(),
  wsp: Joi.number().required(),
  uom: Joi.string().required(),
});

// Store Product Master Controller
const storeProductMaster = asyncHandler(async (req, res) => {
  // Validate the request body using Joi
  const { error, value } = productMasterValidationSchema.validate(req.body, {
    abortEarly: false, // Return all validation errors
  });

  if (error) {
    return res.status(403).json(
      new ApiError(
        403,
        'Validation Failed.',
        error.details.map((err) => ({
          field: err.context.key,
          message: err.message,
        })),
      ),
    );
  }

  try {
    // Create and save the product master data
    const productMaster = await ProductMaster.create(value);

    return res
      .status(201)
      .json(new ApiResponse(201, productMaster, 'Product master created successfully'));
  } catch (err) {
    return res.status(500).json(new ApiError(500, 'Failed to create product master', err.message));
  }
});

const getProductMaster = asyncHandler(async (req, res) => {
  const { page = 1, pageSize = 5 } = req.query;

  // Convert to numbers
  const pageNumber = Number(page);
  const pageLimit = Number(pageSize);

  // Skip and limit for pagination
  const skip = (pageNumber - 1) * pageLimit;
  const limit = pageLimit;

  const productMasters = await ProductMaster.find().skip(skip).limit(limit);
  return res
    .status(200)
    .json(new ApiResponse(200, { productMasters, totalProducts }, 'Data fetched Successfully'));
});
export { storeProductMaster, getProductMaster };
