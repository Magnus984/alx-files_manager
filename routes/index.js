import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const router = Router();

router.get('/status', async (req, res) => AppController.getStatus(req, res));
router.get('/stats', async (req, res) => AppController.getStats(req, res));
router.post('/users', async (req, res) => UsersController.postNew(req, res));

export default router;
