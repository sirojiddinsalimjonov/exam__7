import { Router } from 'express';
import { CATEGORY, FULL_NAMES, SUB_CATEGORY } from '../controllers/categories.controller.js'


const fields = Router();

fields.get('/category', CATEGORY)

fields.get('/subcategory', SUB_CATEGORY)

fields.get('/fullname', FULL_NAMES)

export default fields;
