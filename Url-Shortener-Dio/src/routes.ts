import urlController from "./controllers/url.controller";
import { Router } from "express";

const router = Router();

router.post('/shorten', urlController.shorten);
router.get('/:hash', urlController.redirect);

export default router;
