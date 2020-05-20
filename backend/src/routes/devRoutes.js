import { Router } from 'express'
import DevController from '../controller/DevController'

const routes = Router()

routes.get('/', DevController.list)
routes.post('/', DevController.create)

export default routes
