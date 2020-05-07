import { Router } from 'express'
import LikeController from '../controller/LikeController'

const routes = Router()

routes.post('/:target_id/like', LikeController.create)

export default routes
