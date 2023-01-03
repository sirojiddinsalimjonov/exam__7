import { Router } from 'express';
import { POST } from '../middleware/post.middelware.js';
import { checkToken } from '../utils/token.js';
import { USERS_ACTIVATE, GET_ACTIVE, GET_POST, GET_REJECTED, USERS__REJECTED, USER_LOGIN } from '../controllers/admin.controller.js';

const admin = Router();

admin.post('/sign', POST, USER_LOGIN);
admin.get("/getpost", checkToken, GET_POST)
admin.get("/getactive", checkToken, GET_ACTIVE)
admin.get("/getrejected", checkToken, GET_REJECTED)
admin.get("/usersapply/:postId", checkToken, USERS_ACTIVATE)
admin.get("/usersreject/:postId", checkToken, USERS__REJECTED)


export default admin;
