"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const node_server_1 = require("@hono/node-server");
const app = new hono_1.Hono();
app.get('/', (c) => c.text('✅ Hono fonctionne !'));
// Utilise le serveur Node.js
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: 8080,
});
console.log('Server running on http://localhost:8080');
