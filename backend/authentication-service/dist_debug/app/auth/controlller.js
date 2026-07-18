"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const node_crypto_1 = require("node:crypto");
const db_1 = __importDefault(require("../../db"));
const schema_1 = require("../../db/schema");
const drizzle_orm_1 = require("drizzle-orm");
class AuthenticationControlller {
    async handleSignup(req, res) {
        const validationResult = await models_1.signupPayloadModel.safeParseAsync(req.body);
        if (validationResult.error)
            return res.status(400).json({ message: 'body vaildation failed', error: validationResult.error.issues });
        const { firstName, lastName, email, password } = validationResult.data;
        const userEmailResult = await db_1.default.select().from(schema_1.usersTable).where((0, drizzle_orm_1.eq)(schema_1.usersTable.email, email));
        if (userEmailResult.length > 0)
            return res.status(400).json({ error: 'duplicate entry', message: `user with email ${email} already exists` });
        const salt = (0, node_crypto_1.randomBytes)(32).toString('hex');
        const hash = (0, node_crypto_1.createHmac)('sha256', salt).update(password).digest('hex');
        const [result] = await db_1.default.insert(schema_1.usersTable).values({
            firstName,
            lastName,
            email,
            password: hash,
            salt
        }).returning({ id: schema_1.usersTable.id });
        return res.status(201).json({ message: 'user has been created successfully', data: { id: result?.id } });
    }
    async handleSignin(req, res) {
        const validationResult = await models_1.signinPayloadModel.safeParseAsync(req.body);
        if (validationResult.error)
            return res.status(400).json({ message: 'body vaildation failed', error: validationResult.error.issues });
        const { email, password } = validationResult.data;
        const [userSelect] = await db_1.default.select().from(schema_1.usersTable).where((0, drizzle_orm_1.eq)(schema_1.usersTable.email, email));
        if (!userSelect)
            return res.status(404).json({ message: `user with email ${email} does not exists` });
        const salt = userSelect.salt;
        const hash = (0, node_crypto_1.createHmac)('sha256', salt).update(password).digest('hex');
        if (userSelect.password !== hash)
            return res.status(400).json({ message: `email or password is incorrect` });
        // todo token bnao 
        return res.json({ message: 'Signin Success', data: { token: 1 } });
    }
}
exports.default = AuthenticationControlller;
//# sourceMappingURL=controlller.js.map