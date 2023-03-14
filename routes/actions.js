import { Router } from 'express'
import * as actionsCtrl from '../controllers/actions.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, actionsCtrl.index)


export { router }
