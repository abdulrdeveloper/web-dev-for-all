"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.usersTable = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(), // db mai first column mai ek unique user id aiy gi next column mai user key hogi , 3rd column mai by default random user data aiy ga
    firstName: (0, pg_core_1.varchar)('first_name', { length: 45 }).notNull(),
    lastName: (0, pg_core_1.varchar)('last_name', { length: 45 }),
    /* iska matlab he ke ORM mapper ko ham bol rhay hain ke hmari application mai user ka name camel-case (firstName) mai rakhna ,
    but db mai snake_case (first_name) mai store kr lena khud hi , and first name ki max length rakhi 45 letter, and notNull kr dia means ke yay required he , skip nai kr saktay */
    email: (0, pg_core_1.varchar)('email', { length: 322 }).notNull().unique(),
    emailVerified: (0, pg_core_1.boolean)('email_verified').default(false),
    password: (0, pg_core_1.varchar)('password', { length: 66 }),
    salt: (0, pg_core_1.text)('salt'),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)('updated_at').$onUpdate(() => new Date()),
});
//# sourceMappingURL=schema.js.map