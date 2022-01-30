import client from "../../core/client.js"

export default async (req, res) =>
  res.sendFile(
    client.render("bivranto")
);
