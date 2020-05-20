import { Router } from 'express'

import devRoutes from './devRoutes'
import actionRoutes from './actionRoutes'

const routes = Router()

routes.use('/devs', devRoutes)
routes.use('/devs', actionRoutes)

export default routes
