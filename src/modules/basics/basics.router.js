import { Router } from 'express'
import { BasicsController } from './basics.controller.js'

export const createBasicRouter = ({ basicsModel }) => {
  const basicsRouter = Router()

  const basicsController = new BasicsController({ basicsModel })

  basicsRouter.get('/', basicsController.getAll)

  return basicsRouter
}