import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import { basicAuthenticate, xTokenAuthenticate } from '../middlewares/auth';
import FilesController from '../controllers/FilesController';

const router = Router();

router.get('/status', async (req, res) => AppController.getStatus(req, res));
router.get('/stats', async (req, res) => AppController.getStats(req, res));
router.post('/users', async (req, res) => UsersController.postNew(req, res));
router.get('/connect', basicAuthenticate, async (req, res) => AuthController.getConnect(req, res));
router.get('/disconnect', xTokenAuthenticate, async (req, res) => AuthController.getDisconnect(req, res));
router.get('/users/me', xTokenAuthenticate, async (req, res) => UsersController.getMe(req, res));
router.post('/files', xTokenAuthenticate, async (req, res) => FilesController.postUpload(req, res));
router.get('/files/:id', xTokenAuthenticate, async (req, res) => FilesController.getShow(req, res));
router.get('/files', xTokenAuthenticate, async (req, res) => FilesController.getIndex(req, res));

export default router;
