import { Router } from 'express'

import devRoutes from './devRoutes'
import likeRoutes from './likeRoutes'

const routes = Router()

routes.use('/devs', devRoutes)
routes.use('/devs', likeRoutes)

export default routes
