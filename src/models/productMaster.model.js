import mongoose, { Schema } from 'mongoose';

const productMasterSchema = new Schema({
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
  sleeves: {
    type: String,
    required: false,
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
  pattern: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  pkt: {
    type: String,
    required: true,
  },
  fit: {
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
    type: Number,
    required: true,
  },
  uom: {
    type: String,
    required: true,
  },
});

export const ProductMaster = mongoose.model('ProductMaster', productMasterSchema);
