import { asyncHandler } from '../utils/asyncHandler.js';
import Joi from 'joi';
import { ProductMaster } from '../models/productMaster.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { getPaginationParams } from '../utils/paginationUtil.js';
import { Fabric } from '../models/fabric.model.js';

// Joi schema for validation
const fabricValidationSchema = Joi.object({
  division: Joi.string().required(),
  product: Joi.string().required(),
  brand: Joi.string().optional(),
  style: Joi.string().required(),
  colorCode: Joi.string().optional(),
  size: Joi.string().required(),
  supplier: Joi.string().required(),
  colorName: Joi.string().required(),
  type: Joi.string().required(),
  hsnCode: Joi.string().required(),
  gstGroup: Joi.number().optional(),
  costPrice: Joi.number().required(),
  retailPrice: Joi.number().required(),
  mrp: Joi.number().required(),
  wsp: Joi.number().required(),
  uom: Joi.string().required(),
});

const storeFabric = asyncHandler(async (req, res) => {
  // Validate the request body using Joi
  const { error, value } = fabricValidationSchema.validate(req.body, {
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
    const fabric = await Fabric.create(value);

    return res.status(201).json(new ApiResponse(201, fabric, 'Fabric created successfully'));
  } catch (err) {
    return res.status(500).json(new ApiError(500, 'Failed to create Fabric', err.message));
  }
});

const getFabrics = asyncHandler(async (req, res) => {
  const { page, pageSize } = req.query;
  const { skip, limit } = getPaginationParams(page, pageSize);

  const total = await Fabric.countDocuments();
  const items = await Fabric.find().skip(skip).limit(limit);

  res.status(200).json(new ApiResponse(200, { items, total }, 'Data fetched successfully'));
});

const getFabricById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const item = await Fabric.findById(id).select('-_id -__v');
  res.status(200).json(new ApiResponse(200, item, 'Data fetched successfully'));
});

const updateFabric = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // Validate the request body using Joi
  const { error, value } = fabricValidationSchema.validate(req.body, {
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
  const item = await Fabric.findById(id);
  if (!item) {
    return res.status(404).json(new ApiError(403, 'Product not found.', {}));
  }
  // Update the product with new values from the request body
  Object.assign(item, value);

  // Save the updated product to the database
  await item.save();
  res.status(200).json(new ApiResponse(200, item, 'Data updated successfully'));
});

export { storeFabric, getFabrics, getFabricById, updateFabric };
