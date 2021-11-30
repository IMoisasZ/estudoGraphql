import express from 'express'
import ClienteController from '../controllers/clienteController.js'

const router = express.Router()

router.post('/', ClienteController.createCliente)
router.put('/', ClienteController.updateCliente)
router.get('/', ClienteController.getClientes)
router.get('/:cliente_id', ClienteController.getCliente)

export default router