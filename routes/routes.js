/*Dengan memanfaatkan express router, bisa membuat route terpisah dari “index.js”.

Dengan demikian,bisa membuat route yang lebih kompleks.*/

//import express
import express from "express";

//init express route
const router = express.Router();

//home route
router.get('/', (req, res) => {
    res.send('welcome to home page');
});

//about route
router.get('/about', (req, res) => {
    res.send('Welcome To About Page');
});

//contact route
router.get('/kontak', (req, res) => {
    res.send('Selamat datang halaman kontak  ');
});

//exprot default router
export default router

