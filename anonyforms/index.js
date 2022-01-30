import client from "../core/client.js";
import index from "./views/index.js";

const router = client.router();

router.route("/").get(index);

export default router;
