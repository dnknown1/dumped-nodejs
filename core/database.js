import mongoose from "mongoose";
import {DB} from "../config.js";

const CONNECT_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const useDb = async () => (
  mongoose.connect(DB.URI
    .replace("<password>", DB.PWD)
    .replace("<dbname>", DB.NAME),
  CONNECT_OPTIONS)
  .then(
    ()=>console.log(`connected to ${DB.NAME}`)
));

export default {
  schema: (...s) => new mongoose.Schema(...s),
  model: mongoose.model,
  connect: useDb
};
