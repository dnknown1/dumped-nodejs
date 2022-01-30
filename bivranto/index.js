import client from "../core/client.js";
import index from "./views/index.js";
import admin from "./views/admin.js";

const router = client.router();

router.route("/").get(index);
router.route("/admin").get(admin);

export default router;
