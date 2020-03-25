const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    /** Lista todas as ongs pelo Insomnia
     *  /ongs é o contexto
     * e ele faz um select em toda a tabela ongs
    */ 
    async index (request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    
    /** cria uma nova ong no banco de dados 
     * request pelo insomnia
     * 
    */
    async create(request, response){   
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(6).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
};