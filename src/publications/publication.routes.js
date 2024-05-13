import { Router } from "express";
import { check } from "express-validator";
import { publicationsGet, publicationsPut, publicationsGetById } from "./publication.controller.js";

const router = Router();

router.get('/publicaciones', publicationsGet);

router.get('/publicacion/:id', publicationsGetById);

router.put('/publicacion/:id', [
    check('id', 'No es un ID válido').isMongoId(),
], publicationsPut);

export default router;