import dotenv from "dotenv";
import cors from "cors";
import express from "express";

dotenv.config();

const PORT = process.env.SERVER_PORT||8000;

const DB = {
  URI: process.env.DB_URI,
  PWD: process.env.DB_PWD,
  NAME: process.env.DB_NAME
};

const INSTALLED_CLIENTS = [
  "bivranto",
  "anonyforms",
];

const MIDDLEWARES = [
  cors,
  express.json
];

export { 
  PORT,
  DB,
  INSTALLED_CLIENTS,
  MIDDLEWARES
};
