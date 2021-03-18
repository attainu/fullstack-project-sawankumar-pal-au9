import express from "express";
import passport from "passport";
// import facebookController from "../controllers/facebookController";


const fbRouter = express.Router();

fbRouter.get("/auth/facebook", passport.authenticate("facebook"));

fbRouter.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/fail"
  })
);

fbRouter.get("/fail", (req, res) => {
  res.send("Failed attempt");
});

fbRouter.get("/", (req, res) => {
  res.send("Success");
});
export default fbRouter;