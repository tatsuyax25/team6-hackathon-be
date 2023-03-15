import { Router } from 'express'
import * as actionsCtrl from '../controllers/actions.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, actionsCtrl.index)
router.post('/', checkAuth, actionsCtrl.create)
router.put('/:id', checkAuth, actionsCtrl.update)


export { router }
