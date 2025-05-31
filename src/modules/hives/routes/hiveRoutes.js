import express from "express";
const router = express.Router();
import {
  addHive,
  fetchHiveLogs,
  exportHiveLogs,
} from "../../hives/controller/hivecontroller.js";

router.post("/", addHive);
router.get("/", fetchHiveLogs);
router.get('/export', exportHiveLogs);

export default router;
