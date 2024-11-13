import { Router } from "express"
import * as test from "./controller/test.controller.js";

const router = Router();

router.route("/test").get(test.abcd)

export default router;