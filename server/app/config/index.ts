import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 6000,
  host: process.env.HOST || "localhost",
  protocol: process.env.PROTOCOL,
  apiVersion: process.env.API_VERSION,
};
