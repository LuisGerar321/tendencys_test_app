import { Request, Response } from "express";
import { ShippingRequest } from "../interfaces/ShippingLabel";
import { createShippingLabel } from "../services/ShippingLabel";

export class ShippingLabelController {
  protected name;

  constructor() {
    this.name = "ShippingLabelController";
  }

  public static async handleCreateShippingLabel(req: Request, res: Response) {
    try {
      const payload: ShippingRequest = req.body;
      const shippingLabel = await createShippingLabel(payload);
      res.status(201).send({
        status: 201,
        message: "Shipping Label created",
        data: shippingLabel,
      });
    } catch (error) {
      res.status(500).send({
        code: "500",
        message: (error as Error).message,
      });
    }
  }
}
