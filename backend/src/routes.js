const express = require('express');

/** import do controller de ongs */
const OngController = require('./controllers/ongController');
/** import do controller de incidentes */
const IncidentController = require('./controllers/IncidentController');
/** import do controller de Profile */
const ProfileController = require('./controllers/ProfileController');
/** import do controller de sessão do usuário LOGIN */
const SessionController = require('./controllers/SessionController');

const routes = express.Router();



/** cria uma ong atrabvés do método dentro do controle (método CREATE) */
routes.post('/ongs', OngController.create);
/** Lista todas as ongs */
routes.get('/ongs', OngController.index);

/** rotas para ações de incidents */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/sessions', SessionController.create);

module.exports = routes;