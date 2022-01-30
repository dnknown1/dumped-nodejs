import express from "express";
import path from "path";
export default {
  router: express.Router,
  render: root => path.resolve(
    root,"www","index.html"
  )
};
