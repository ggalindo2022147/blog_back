import mongoose from "mongoose";

const PublicationSchema = mongoose.Schema({
    autor: {
        type: String,
    },
    titulo: {
        type: String,
        required: [true, "Title is required"],
    },
    categoria: {
        type: String,
        required: [true, "Category is required"],
    },
    contenido: {
        type: String,
        required: [true, "Content is mandatory"],
    },
    imagen: {
        type: String,
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
    comoFunciona: {
        type: String,
    },
    queSeUso: {
        type: String,
    },
    imagenes:{
        type: Array,
    },
    etiquetas: {
        type: String,
    },
    comentarios: [{
        usuario: {
            type: String,
        },
        descripcion: {
            type: String,
        },
    }],
});

export default mongoose.model("Publication", PublicationSchema);
