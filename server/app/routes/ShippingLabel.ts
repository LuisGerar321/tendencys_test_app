import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares";
import { shippingRequestSchema } from "../validators/ShippingLabel";
import { ShippingLabelController } from "../controllers/ShippingLabel";

const ShippingLabelRoutes = Router();

ShippingLabelRoutes.post("/", validateBodyMiddleware(shippingRequestSchema), ShippingLabelController.handleCreateShippingLabel);

export default ShippingLabelRoutes;
