"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/testConnection.ts
require("dotenv/config");
const supabase_js_1 = require("@supabase/supabase-js");
const supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);
async function test() {
    console.log('🔗 Tentative de connexion à Supabase...');
    // essaie de lire les données de la table test_table
    const { data, error } = await supabase
        .from('test_table')
        .select('*');
    if (error) {
        console.error('❌ Erreur :', error);
    }
    else {
        console.log('✅ Connexion réussie ! Données :', data);
    }
}
test();
