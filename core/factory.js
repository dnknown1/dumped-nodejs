import express from "express";
import path from "path";
import routes from "../urls.js";
import {
  MIDDLEWARES,
  INSTALLED_CLIENTS,
} from "../config.js";

const server = express();

// client specific static dirs
INSTALLED_CLIENTS.map(
  client => server.use(express.static(
    path.resolve(client,"www")
)));

// middlewares
MIDDLEWARES.map(m => server.use(m()));

// clients' root paths
Object.entries(routes).map(
  route => server.use(...route)
);

export default server;
