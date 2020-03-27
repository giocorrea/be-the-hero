const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

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
/** OBS sempre segue uma linha de execução primeiro o celebrate depois o create, pode ter mais chamadas se necessário */
routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),

    }),
}), OngController.create);
/** Lista todas as ongs */
routes.get('/ongs', OngController.index);

/** rotas para ações de incidents */
routes.get('/incidents', celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentController.index);

/** Fazer validação para incidentes e o authorization da query do insomnia */
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().min(3),
        description: Joi.string().required().min(10),
        value: Joi.number().required(),
    })
}),IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;