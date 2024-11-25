import mongoose, { Schema } from 'mongoose';

const accessoriesSchema = new Schema({
  skuNo: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: false,
  },
  style: {
    type: String,
    required: true,
  },
  colorCode: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  articleNo: {
    type: String,
    required: true,
  },
  colorName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  hsnCode: {
    type: String,
    required: true,
  },
  gstGroup: {
    type: Number,
    required: false,
  },
  costPrice: {
    type: Number,
    required: true,
  },
  retailPrice: {
    type: Number,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  wsp: {
    type: String,
    required: true,
  },
  uom: {
    type: String,
    required: true,
  },
});

export const Accessories = mongoose.model('Accessories', accessoriesSchema);
