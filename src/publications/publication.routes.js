import { Router } from "express";
import { check } from "express-validator";
import { publicationsGet, publicationsPut, publicationsGetById } from "./publication.controller";

const router = Router();

router.get('/publicacion', publicationsGet);

router.get('/publicacion/:id', publicationsGetById);

router.put('/publicacion/:id', [
    check('id', 'No es un ID válido').isMongoId(),
], publicationsPut);

export default router;