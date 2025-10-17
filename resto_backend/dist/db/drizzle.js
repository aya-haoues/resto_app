"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.sql = void 0;
const postgres_js_1 = require("drizzle-orm/postgres-js");
const postgres_1 = __importDefault(require("postgres"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL;
exports.sql = (0, postgres_1.default)(SUPABASE_DB_URL, { ssl: "require" });
exports.db = (0, postgres_js_1.drizzle)(exports.sql);
// Test de connexion
(0, exports.sql) `SELECT 1`
    .then(() => console.log("✅ Connexion à Supabase réussie"))
    .catch((err) => console.error("❌ Erreur de connexion Supabase :", err));
