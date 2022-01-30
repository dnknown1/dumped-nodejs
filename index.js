import app from "./core/factory.js";
import {PORT} from "./config.js";
import db from "./core/database.js";



app.listen(
    PORT,
    () => console.log(`listening at: ${PORT}`))

