import Admins from "../models/admin.js";

export default async (req, res) =>(
  new Admins({
    uname: "blah",
    pwd: "blahblah"
  })
  .save()
  .then(rep =>{
    console.log(rep)
    res.json(rep)
  })
  .catch(e => {
    console.log(e)
    res.json({"error":"username not available"})
  })
);
