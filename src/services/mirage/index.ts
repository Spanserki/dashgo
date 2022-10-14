import { createServer, Model } from 'miragejs'

type User = {
    name: string;
    email: string;
    create_at: string;
};

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        routes() {
            this.namespace = 'api'; //padrão das rotas
            this.timing = 750; //delay ao fazer a chamada

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough(); //Todas as chamadas /api devem passar pelo Mirage 
        },
    })

    return server;
}