import { Router } from 'express'

import devRoutes from './devRoutes'

const routes = Router()

routes.use('/dev', devRoutes)

export default routes
