import { io } from "../server";

export const socketEmmitToAllNewShippingLabel = () => {
  console.log("socket emmit to all client: 'newShippingLabel'");
  io.emit("newShippingLabel");
};
