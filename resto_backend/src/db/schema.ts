import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const test_table = pgTable("test_table", {
  id: serial("id").primaryKey(),
  nom: text("nom"),
});
