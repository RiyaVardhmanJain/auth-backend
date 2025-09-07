import { Router } from "express";
import { healthcheck } from "../controllers/healthcheck.controller.js";


const router = Router()
router.route('/').get(healthcheck)
export default router






















//Bare minimum boiler plate code 
// import { Router } from "express";
// const router = Router()
// export default router