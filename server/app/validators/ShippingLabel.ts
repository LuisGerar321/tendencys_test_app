import Joi from "joi";
import { EPackageType, EPackagelenghtUnit, EPackageweightUnit } from "../interfaces/ShippingLabel";

const coordinatesSchema = Joi.object({
  latitude: Joi.string().required(),
  longitude: Joi.string().required(),
});

const addressSchema = Joi.object({
  name: Joi.string().required(),
  company: Joi.string().optional().allow(""),
  email: Joi.string().email().required().allow(""),
  phone: Joi.string().required(),
  street: Joi.string().required(),
  number: Joi.string().required(),
  district: Joi.string().required().allow(""),
  city: Joi.string().required(),
  state: Joi.string().required(),
  category: Joi.number().optional(),
  country: Joi.string().required(),
  postalCode: Joi.string().required(),
  reference: Joi.string().allow("").optional(),
  coordinates: coordinatesSchema.optional(),
});

const dimensionSchema = Joi.object({
  length: Joi.number().required(),
  width: Joi.number().required(),
  height: Joi.number().required(),
});

const packageSchema = Joi.object({
  content: Joi.string().required(),
  amount: Joi.number().integer().required(),
  type: Joi.string().valid(...Object.values(EPackageType)),
  dimensions: dimensionSchema.required(),
  weight: Joi.number().required(),
  insurance: Joi.number().required(),
  declaredValue: Joi.number().required(),
  weightUnit: Joi.string()
    .valid(...Object.values(EPackageweightUnit))
    .required(),
  lengthUnit: Joi.string()
    .valid(...Object.values(EPackagelenghtUnit))
    .required(),
});

const shipmentSchema = Joi.object({
  carrier: Joi.string().required(),
  service: Joi.string().optional().allow(""),
  type: Joi.number().integer().required(),
});

const settingsSchema = Joi.object({
  printFormat: Joi.string().optional().allow(""),
  printSize: Joi.string().optional().allow(""),
  comments: Joi.string().allow("").optional(),
  currency: Joi.string().allow(""),
});

const shippingRequestSchema = Joi.object({
  origin: addressSchema.required(),
  destination: addressSchema.required(),
  packages: Joi.array().items(packageSchema).required(),
  shipment: shipmentSchema.required(),
  settings: settingsSchema.required(),
});

export { addressSchema, dimensionSchema, packageSchema, shipmentSchema, settingsSchema, shippingRequestSchema };
