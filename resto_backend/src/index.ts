import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import dotenv from 'dotenv';
import menuApp from './routes/menu';

dotenv.config();

const app = new Hono();

app.get('/', (c) => c.text('🍽️ Backend Resto en marche !'));
app.route('/menu', menuApp);

const port = Number(process.env.PORT) || 8080;
serve({ fetch: app.fetch, port });

console.log(`🚀 Serveur en marche sur http://localhost:${port}`);
