"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test_table = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.test_table = (0, pg_core_1.pgTable)("test_table", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    nom: (0, pg_core_1.text)("nom"),
});
