"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const node_server_1 = require("@hono/node-server");
const dotenv_1 = __importDefault(require("dotenv"));
const menu_1 = __importDefault(require("./routes/menu"));
dotenv_1.default.config();
const app = new hono_1.Hono();
app.get('/', (c) => c.text('🍽️ Backend Resto en marche !'));
app.route('/menu', menu_1.default);
const port = Number(process.env.PORT) || 8080;
(0, node_server_1.serve)({ fetch: app.fetch, port });
console.log(`🚀 Serveur en marche sur http://localhost:${port}`);
