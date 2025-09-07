import { Router } from "express";
import {
  Login,
  RegisterUser,
  changeCurrentPassword,
  forgotPassword,
  getCurrentUser,
  logoutUser,
  refreshAccessToken,
  resendVerificationEmail,
  resetForgotPassword,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userRegisterValidator,
  userLoginValidator,
  userForgotPassword,
  userChangeCurrentPassword,
  userResetPassword
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/register").post(userRegisterValidator(), validate, RegisterUser);
router.route("/login").post(userLoginValidator(), validate, Login);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router
  .route("/forgot-password")
  .post(userForgotPassword(), validate, forgotPassword);
router
  .route("/reset-password/:resetToken")
  .post(userResetPassword(), validate, resetForgotPassword);

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").post(verifyJWT, getCurrentUser);
router
  .route("/change-password")
  .post(
    verifyJWT,
    userChangeCurrentPassword(),
    validate,
    changeCurrentPassword,
  );
router
  .route("/resend-email-verification")
  .post(verifyJWT, resendVerificationEmail);

export default router;
