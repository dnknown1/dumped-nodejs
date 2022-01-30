import db from "../../core/database.js";

export default db.model(
  "Bivranto_admins",
  db.schema({
    uname:{
      type: String,
      required: true,
      unique:true,
      lowercase:true
   },
    pwd: {
      type: String,
      required: true,
      minlength: 6
   }
}));
