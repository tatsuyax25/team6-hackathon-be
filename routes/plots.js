import { Router } from 'express'
import * as plotsCtrl from '../controllers/plots.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, plotsCtrl.index)


export { router }