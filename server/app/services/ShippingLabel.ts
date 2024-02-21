import axios from "axios";
import { ShipmentResponse, ShipmentResponseMeta, ShippingRequest } from "../interfaces/ShippingLabel";
import { config } from "../config";
import { socketEmmitToAllNewShippingLabel } from "../utils/sockets";

const { enviaApiKey, enviaApiUrl } = config;

export const createShippingLabel = async (shippingPayload: ShippingRequest) => {
  try {
    const newShippingLabel = //TODO: Shipping API is broken. It always return 400 status code, read more in https://docs.envia.com/
    (
      await axios.post(`${enviaApiUrl}/ship/generate/`, shippingPayload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${enviaApiKey}`,
        },
      })
    ).data;

    socketEmmitToAllNewShippingLabel();
    return {};
    if (newShippingLabel.code !== 201 || newShippingLabel.code !== 200)
      throw new Error(`shipping label api error when trying to create a new record, api logger error said: ${JSON.stringify(newShippingLabel.message)}`);
    return newShippingLabel;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
