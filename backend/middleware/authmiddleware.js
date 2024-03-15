
import User from "../models/usermodel.js";
import Errorhandler from "../utils/Errorhandler.js"
import catchasyncerrors from "./catchasyncerror.js"
import jwt from "jsonwebtoken"

export const isAuthenticated = catchasyncerrors(async (req, res, next) => {
  const token = req.cookies.token;

  console.log("this is token" + token);
  if (!token) {
    return next(new Errorhandler("please login to continue ", 404));
  } else {
    try {
      let decodeddata;
      decodeddata = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodeddata);
      // req.user = await User.findById(decodeddata.id);
      req.user=decodeddata

      req.user = await User.findById(decodeddata.id);
      console.log('this is req. user :'+req.user)
      // console.log("this is a req.user from frontend request:" + req.user);
      next();
    } catch (error) {
      return next(
        new Errorhandler("token is expired please login to continue")
      );
    }
  }
});
export const authorization = function (...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      
      return next(
        new Errorhandler(
          `Role :${req.user.role} is not allowed to access this resource `,
          401
        )
      );
    }
    next();
  };
};

