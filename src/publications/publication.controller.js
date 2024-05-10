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
            "imagen": "https://private-user-images.githubusercontent.com/134737083/329459226-4c1bf7a9-667f-41a2-bf96-143c5e501bdf.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5MjI2LTRjMWJmN2E5LTY2N2YtNDFhMi1iZjk2LTE0M2M1ZTUwMWJkZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MTE3OGIwMWU5MjJkNjU0MjIwMDNkN2I3YTdkMDY1YzRiYjI1MzNjMWE2NjFkNzU3Y2FlZGYyZWZjNTQ5NTRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.a4sQhdeWCKFO9TwSi7A_HzZquJK20x8GLAqVrG5dVtc",
            "comoFunciona": "Se realizo una api con nodejsy express de un registro de ventas que se le añadio un carrito de compras y un login y su funcionamiento es el siguiente se crea un usuario y inicia sesion y ya puede acceder a todas las funcionalidades.",
            "queSeUso": "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            "imagenes": ["https://private-user-images.githubusercontent.com/134737083/329459237-2a0b3d80-3153-416f-bf52-c27f4a75a408.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5MjM3LTJhMGIzZDgwLTMxNTMtNDE2Zi1iZjUyLWMyN2Y0YTc1YTQwOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04Y2M1NDcwNmE2NGI1YTgxNTRmY2M0Y2ZkNGM5YzU2Nzk2ODNiNmM5MWM5ZDFmMTVjNmUyYTcyMzYzNDY2YzVjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.wXE4Iu7HhsPM_kzXA_15EJIFDjplj8Z8n_wI6QE8gIo",
                "https://private-user-images.githubusercontent.com/134737083/329459247-a5d95e8e-68c4-4b12-bf1e-6f22cf4995ba.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5MjQ3LWE1ZDk1ZThlLTY4YzQtNGIxMi1iZjFlLTZmMjJjZjQ5OTViYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00OGZjZjIzY2E2MTdkMGMyNjQ3MTdkMTgzZTRlZjJmMTM3ZTZlOThlNWJjN2QyMmFkNzZmOTdlMzQ1MjRjYWE1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.clGttSVMc1AxtzPqB57MJ6c09fegKUdjsvz_m6CHd3c"],
            "etiquetas": "nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
        })

        const publication2 = new Publication({
            autor: "ggalindo",
            titulo: "Control academico",
            "categoria": "Gestor",
            "contenido": "Se realizo una api con nodejsy express de un control academico",
            "imagen": "https://private-user-images.githubusercontent.com/134737083/329459341-f1715b32-eb1e-463a-9a0d-f88db32ee12b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5MzQxLWYxNzE1YjMyLWViMWUtNDYzYS05YTBkLWY4OGRiMzJlZTEyYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMjk2NDliNzAxNzJiOTEzYzBhZjA1OWExNTY2NTRkOTliMDM0MjNmNDU0M2Q1MGEwZmI4ZmUwNGVjMTRmYjkyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.KQPindg-RPgqchY46IbVNOM2Dak9exptpcITQ2rp1V4",
            "comoFunciona": "Se realizo una api con nodejsy express de un control academico y su funcionamiento es el siguiente los profesores pueden crear cursos y los estudiantes pueden inscribirse a los cursos",
            "queSeUso": "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            "imagenes": ["https://private-user-images.githubusercontent.com/134737083/329459356-c6d90bac-9c4f-482d-8777-45fc0365a413.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5MzU2LWM2ZDkwYmFjLTljNGYtNDgyZC04Nzc3LTQ1ZmMwMzY1YTQxMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NThmODUwYTc0N2U0MjRmNzFjMmQ4OGVhZDliMzRkOTJkZmE1MzdlYWUxZjNlMWIxOGZiNWIwNDkxYTNmYTcxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.kHVO7oQEiAS5kanZ6_MMW9dM81CzRJ3HJN_Pe8A115U",
                "https://private-user-images.githubusercontent.com/134737083/329459361-a1396be1-2310-4296-9067-fb4d98a49f01.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5MzYxLWExMzk2YmUxLTIzMTAtNDI5Ni05MDY3LWZiNGQ5OGE0OWYwMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYjUzNjEyYWQyNjljZjVjODcyZGZiZWZjNDY5N2U0MDgzNGU3Yjg4YTA1YmM5MzVhM2MzYTNhMmU0YzRiMmYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.J4Z1X_z99rqnAuU5K-jYay7guu7NBlzXOGmkLYdoF8M"],
            "etiquetas": "nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
        })
        const publication3 = new Publication({
            autor: "ggalindo",
            titulo: "Gestor de opiniones",
            "categoria": "Gestor",
            "contenido": "Se realizo una api con nodejsy express de un gestor de opiniones",
            "imagen": "https://private-user-images.githubusercontent.com/134737083/329459438-1465caab-7652-4444-aeb5-6fe4d98c1aa9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5NDM4LTE0NjVjYWFiLTc2NTItNDQ0NC1hZWI1LTZmZTRkOThjMWFhOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZjAzYzM2MzZiNThlODUyY2ZkYTBjZmZlMGVhNjIzYjBmNjYwM2E2MWFlY2QzODAxMTRlNmE1NDQ3ODZjNjliJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.jDrEWVH5xIt5sD37ImMWHkLU69kObp2cwLNSfnHQS3E",
            "comoFunciona": "Se realizo una api con nodejsy express de un gestor de opiniones y su funcionamiento es el siguiente los usuarios pueden crear opiniones y calificarlas",
            "queSeUso": "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            "imagenes": ["https://private-user-images.githubusercontent.com/134737083/329459452-b228cc88-695e-482a-bbb4-5e118f3b411e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5NDUyLWIyMjhjYzg4LTY5NWUtNDgyYS1iYmI0LTVlMTE4ZjNiNDExZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02N2EwMmIzMDhlMjlhYjQ3NDdiZDMwYzQzNmVlYmIyNzhkNzBjMzQxNTg1MGFjYTljNDNjYzJiOTIzMDk2NWFiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.YRMECzKF7dDyvj6TKAfw8oy8yW10PfmeyAPtTcqXKX4",
                "https://private-user-images.githubusercontent.com/134737083/329459473-720db3a7-ce51-48ef-8cd2-07b4090362b6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5NDczLTcyMGRiM2E3LWNlNTEtNDhlZi04Y2QyLTA3YjQwOTAzNjJiNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMGVmZGZkYTRmZWJlZDhiMWIyMDgyMDRhMzEzYTYyYTA5MzJlOThmYmY3MmY5YWZiYWE1YzdhNGZkNzVjNWY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.RnOfIvG4M_C7HJ7KtzXJNNnbFfD7lK2rWMXu6HjY3WY"],
            "etiquetas": "nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
        })
        const publication4 = new Publication({
            autor: "ggalindo",
            titulo: "Gestor de empresas",
            "categoria": "Gestor",
            "contenido": "Se realizo una api con nodejsy express de un gestor de empresas",
            "imagen": "https://private-user-images.githubusercontent.com/134737083/329459526-13d9cc95-2df9-4097-b496-6a437282fd33.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5NTI2LTEzZDljYzk1LTJkZjktNDA5Ny1iNDk2LTZhNDM3MjgyZmQzMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wOTkzYTJkOWMzODlmYWI2MzFkNjc4ODZkNDBkM2FkOWEyNTgyOTM0YjUwMzI3Njk0MjI3ZWVjNGQxNWU2ODU3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9JecHK4SDm8o5qSiEQ0lfkH39DkKxk9smKf_hZ19zkc",
            "comoFunciona": "Se realizo una api con nodejsy express de un gestor de empresas crear empresas y exportar toda la informacion de las empresas a excel",
            "queSeUso": "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose, exceljs",
            "imagenes": ["https://private-user-images.githubusercontent.com/134737083/329459535-70ab00a9-b093-4463-aa47-067deb6f3dea.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5NTM1LTcwYWIwMGE5LWIwOTMtNDQ2My1hYTQ3LTA2N2RlYjZmM2RlYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNGU2Y2JkMjIwZjRiNWVmY2FiNDNhN2YwMmJhM2M1MjhmYjQzNTYzMmFjNDRhZTgyMjk1MTM5YWNkZDYyMzA1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.V6DQPYlv-wDDM0vI_X9GP0LDqs-OELAxTVWKCNh-z44",
                "https://private-user-images.githubusercontent.com/134737083/329459552-5126e274-e1fe-4dfd-9f1e-828046479ff0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5NTUyLTUxMjZlMjc0LWUxZmUtNGRmZC05ZjFlLTgyODA0NjQ3OWZmMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZTQzOWI5NTE1YjMwZGM2MWY2MWJkODFiODJjODYxZDljMmZlZWEzNjc5ZDVkNTRhMGMzYmM5MGVmYTBiYWVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Za6xPiwnx-GXYOxEulsS_bSBn84CN6ZendlG2CVbPP0"],
            "etiquetas": "nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose, exceljs",
        })
        const publication5 = new Publication({
            autor: "ggalindo",
            titulo: "Clon de twitch",
            "categoria": "Clon",
            "contenido": "Se realizo el clon de twitch con react",
            "imagen": "https://private-user-images.githubusercontent.com/134737083/329459583-0ddfb560-bb3e-426d-93b3-30bc62e9daea.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5NTgzLTBkZGZiNTYwLWJiM2UtNDI2ZC05M2IzLTMwYmM2MmU5ZGFlYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMTFkYWNiMWJkNjNiZDc0OWQ0OGU0ZDMyZmM1MzMzY2I5OGUyNTY1YzY2ZTY5NDQwNGZjNzE4YzNkYTkyNjY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.CFO0tim6T8J9gsv4pOSro989ojzWnU9EWMRh3kHvDME",
            "comoFunciona": "Se realizo el clon de twitch con react y su funcionamiento es el siguiente los usuarios pueden ver los streams en vivo y los videos de los streamers",
            "queSeUso": "Se utilizo axios, react, react-dom, react-router-dom",
            "imagenes": ["https://private-user-images.githubusercontent.com/134737083/329459595-4bbc1872-0c7c-4a3b-af35-317a101f9988.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5NTk1LTRiYmMxODcyLTBjN2MtNGEzYi1hZjM1LTMxN2ExMDFmOTk4OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYTdiYjQzODViM2FlN2NlYzA0MWYwYTc0NTU0N2NjZGQ5NjlkZDUxMGYxZDExMjEzNGFhNDc4YzQ4MTMwN2I0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.rrZS9fIVzwgtonupAnmIBjU4cf3giBJhUy_usbhSC4s",
                "https://private-user-images.githubusercontent.com/134737083/329459605-f4099f87-60d7-422a-872d-b139359e61c3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzMzAwNTgsIm5iZiI6MTcxNTMyOTc1OCwicGF0aCI6Ii8xMzQ3MzcwODMvMzI5NDU5NjA1LWY0MDk5Zjg3LTYwZDctNDIyYS04NzJkLWIxMzkzNTllNjFjMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxMFQwODI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYzFhNTQyZjc0YmFiMWQxNmI5YzU3MmQ5YTM1ZWFlYzI2NTRjNDY3NTg4ZTk1MmQxZDEzMmFmMjY4OGJmZGY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.CjeO7sCQLuYnQdKw7rXTntmA9_G0bp46TTKRVQSFefk"],
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
