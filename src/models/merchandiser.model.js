import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import { User } from "./user.model.js";

const merchandiserSchema = new Schema({
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    // ... any other patient-specific fields ...
  });
  
 export const Merchandiser = User.discriminator('Merchandiser', merchandiserSchema);
  
