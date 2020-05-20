import { Router } from 'express'
import ActionController from '../controller/ActionController'

const routes = Router()

routes.post('/:target_id/like', ActionController.like)
routes.post('/:target_id/dislike', ActionController.dislike)

export default routes
