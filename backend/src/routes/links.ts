//Configurar rotas

import { Router } from 'express';
import linksController from '../controllers/links';

const router = Router();

// Enviando dados para o servidor, salvando o link do front
router.post('/links', linksController.postLink)

// Pessoa acessa, passando o código do link no endereço
router.get('/links/:code', linksController.hitLink)

// Acessando a estática do código
router.get('/links/:code/stats', linksController.getLink)

export default router;