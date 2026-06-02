import express from 'express' 
import adminWare from '../middleware/adminWare.js';
import adminDash from '../controllers/adminDash.js'
import adminLogin from '../controllers/adminLogin.js'
import editMenu from '../controllers/editMenu.js';

const adminRouter = express.Router();

adminRouter.post('/login',adminLogin);
adminRouter.get('/dashboard',adminWare,adminDash);
adminRouter.post('/edit-menu',adminWare,editMenu);

export default adminRouter