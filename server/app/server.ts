import express, { json } from "express";
import { config } from "./config";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const { port, host } = config;
const app = express();
app.use(json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get(`/test`, (req, res) => {
  res.send({ status: 200, message: "ok" });
});

//Socket connections

io.on("connection", (socket) => {
  console.log(`User with socketId: ${socket.id} connected`);

  socket.on("disconnect", () => {
    console.log(`User with socketId: ${socket.id} disconnected`);
  });
});

export const setupServer = async (): Promise<void> => {
  return new Promise((resolve) => {
    server.listen(port, host, () => {
      console.info(`App running on http://${host}:${port}.`);
      resolve();
    });
  });
};

export { server, io };
