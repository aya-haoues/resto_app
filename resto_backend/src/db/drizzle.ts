import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL!;

export const sql = postgres(SUPABASE_DB_URL, { ssl: "require" });
export const db = drizzle(sql);

// Test de connexion
sql`SELECT 1`
  .then(() => console.log("✅ Connexion à Supabase réussie"))
  .catch((err) => console.error("❌ Erreur de connexion Supabase :", err));
