import { request, response } from "express";
import Publication from './publication.model.js';

export const publicationsPost = async (req, res) => {
    const publi = await Publication.find();

    if (publi.length === 0) {
        const publication = new Publication({
            autor: "ggalindo",
            titulo: "Poyecto final I Bimestre",
            "categoria": "Proyecto",
            "contenido": "Se realizo una api con nodejsy express de un registro de ventas que se le añadio un carrito de compras y un login",
            "imagen": "https://github.com/ggalindo2022147/imgs/blob/main/imgs/img1.png?raw=true",
            "comoFunciona": "Se realizo una api con nodejsy express de un registro de ventas que se le añadio un carrito de compras y un login y su funcionamiento es el siguiente se crea un usuario y inicia sesion y ya puede acceder a todas las funcionalidades.",
            "queSeUso": "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            "imagenes": ["https://github.com/ggalindo2022147/imgs/blob/main/imgs/img2.png?raw=true",
                "https://github.com/ggalindo2022147/imgs/blob/main/imgs/img3.png?raw=true"],
            "etiquetas": "nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
        })

        const publication2 = new Publication({
            autor: "ggalindo",
            titulo: "Control academico",
            "categoria": "Gestor",
            "contenido": "Se realizo una api con nodejsy express de un control academico",
            "imagen": "https://github.com/ggalindo2022147/imgs/blob/main/imgs/img4.png?raw=true",
            "comoFunciona": "Se realizo una api con nodejsy express de un control academico y su funcionamiento es el siguiente los profesores pueden crear cursos y los estudiantes pueden inscribirse a los cursos",
            "queSeUso": "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            "imagenes": ["https://github.com/ggalindo2022147/imgs/blob/main/imgs/img5.png?raw=true",
                "https://github.com/ggalindo2022147/imgs/blob/main/imgs/img6.png?raw=true"],
            "etiquetas": "nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
        })
        const publication3 = new Publication({
            autor: "ggalindo",
            titulo: "Gestor de opiniones",
            "categoria": "Gestor",
            "contenido": "Se realizo una api con nodejsy express de un gestor de opiniones",
            "imagen": "https://github.com/ggalindo2022147/imgs/blob/main/imgs/img7.png?raw=true",
            "comoFunciona": "Se realizo una api con nodejsy express de un gestor de opiniones y su funcionamiento es el siguiente los usuarios pueden crear opiniones y calificarlas",
            "queSeUso": "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            "imagenes": ["https://github.com/ggalindo2022147/imgs/blob/main/imgs/img8.png?raw=true",
                "https://github.com/ggalindo2022147/imgs/blob/main/imgs/img9.png?raw=true"],
            "etiquetas": "nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
        })
        const publication4 = new Publication({
            autor: "ggalindo",
            titulo: "Gestor de empresas",
            "categoria": "Gestor",
            "contenido": "Se realizo una api con nodejsy express de un gestor de empresas",
            "imagen": "https://github.com/ggalindo2022147/imgs/blob/main/imgs/img10.png?raw=true",
            "comoFunciona": "Se realizo una api con nodejsy express de un gestor de empresas crear empresas y exportar toda la informacion de las empresas a excel",
            "queSeUso": "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose, exceljs",
            "imagenes": ["https://github.com/ggalindo2022147/imgs/blob/main/imgs/img11.png?raw=true",
                "https://github.com/ggalindo2022147/imgs/blob/main/imgs/img12.png?raw=true"],
            "etiquetas": "nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose, exceljs",
        })
        const publication5 = new Publication({
            autor: "ggalindo",
            titulo: "Clon de twitch",
            "categoria": "Clon",
            "contenido": "Se realizo el clon de twitch con react",
            "imagen": "https://github.com/ggalindo2022147/imgs/blob/main/imgs/img13.png?raw=true",
            "comoFunciona": "Se realizo el clon de twitch con react y su funcionamiento es el siguiente los usuarios pueden ver los streams en vivo y los videos de los streamers",
            "queSeUso": "Se utilizo axios, react, react-dom, react-router-dom",
            "imagenes": ["https://github.com/ggalindo2022147/imgs/blob/main/imgs/img14.png?raw=true",
                "https://github.com/ggalindo2022147/imgs/blob/main/imgs/15.png?raw=true"],
            "etiquetas": "axios, react, react-dom, react-router-dom",
        })

        await publication.save();
        await publication2.save();
        await publication3.save();
        await publication4.save();
        await publication5.save();
    } else {
        console.log('Publications already exist');
    };
};

export const publicationsGet = async (req, res) => {
    const publications = await Publication.find();
    res.json(publications);
};

export const publicationsGetById = async (req, res) => {
    const { id } = req.params;
    const publication = await Publication.findById(id);
    res.json(publication);

}

export const publicationsPut = async (req, res) => {
    const { id } = req.params;
    const {usuario, descripcion} = req.body;

    nuevoComentario = {nombre: usuario, descripcion: descripcion};

    await Publication.findByIdAndUpdate(id, {$push: {comentarios: nuevoComentario}});
    res.json({mensaje: 'Comentario agregado'});
};
