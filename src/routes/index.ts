import { Router } from 'express';
import carRouter from './carRouter';

const router = Router();

router.use('/cars', carRouter);

export default router;