import apiRoutes from "./api/apiRoutes.js";
import badRequest from "./api/badRequest.js";
import bivranto from "./bivranto/index.js";
import anonyforms from "./anonyforms/index.js";

export default {
  "/api": apiRoutes,
  "/bivranto": bivranto,
  "/anonyforms": anonyforms,
  "*": badRequest
}
