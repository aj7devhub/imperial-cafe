import express from 'express'
import menu from '../controllers/menu.js';

const menuRouter = express.Router();

menuRouter.get('/menu',menu);

export default menuRouter