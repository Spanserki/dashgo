import { createServer, Model, Factory } from 'miragejs'
import { faker } from '@faker-js/faker'

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

        factories: {
            user: Factory.extend ({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createAt() {
                    return faker.date.recent(10);
                },
            })
        },

        seeds(server) {
            server.createList('user', 10);
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