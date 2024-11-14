import { Router } from "express"
import * as test from "./controller/test.controller.js";

const router = Router();

router.route("/test").get(test.abcd)
router.route("/write").post(test.write)

export default router;