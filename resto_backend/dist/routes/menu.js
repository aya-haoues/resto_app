"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const supabaseClient_1 = require("../db/supabaseClient");
const menuApp = new hono_1.Hono();
menuApp.get('/', async (c) => {
    try {
        const { data, error } = await supabaseClient_1.supabase.from('test_table').select('*');
        if (error) {
            throw error;
        }
        return c.json(data);
    }
    catch (err) {
        console.error('Erreur menu:', err);
        return c.json({ error: err.message }, 500);
    }
});
exports.default = menuApp;
