import app from "./core/factory.js";
import {PORT} from "./config.js";
import db from "./core/database.js";

db.connect()
.then(
  ()=> app.listen(
    PORT,
    () => console.log(`listening at: ${PORT}`))
).catch(e => console.log(e));
