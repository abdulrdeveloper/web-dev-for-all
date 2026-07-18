"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const db = (0, node_postgres_1.drizzle)(process.env.DATABASE_URL);
exports.default = db; // export it by yourself 
//# sourceMappingURL=index.js.map