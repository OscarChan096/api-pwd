import {Router} from 'express';
import {methods as pwdController} from './../controllers/pwd.controller';

const router = Router();

// get data
router.get('/',pwdController.getPwds);
router.get('/:id',pwdController.getById);
router.get('/title/:title',pwdController.getByTitle);
router.get('/user/:user',pwdController.getByUser);
router.get('/bank/:name',pwdController.getByNameBank);
router.get('/bank/',pwdController.getCards);
router.get('/bank/:id',pwdController.getCardsById);

// add data
router.post('/',pwdController.addPwd);
router.post('/bank/',pwdController.addCard);

// update data
router.put('/:id',pwdController.updatePwd);
router.put('/bank/:id',pwdController.updateCard);

// delete data
router.delete('/:id',pwdController.deletePwd);
router.delete('/bank/:id',pwdController.deleteCard);

export default router;