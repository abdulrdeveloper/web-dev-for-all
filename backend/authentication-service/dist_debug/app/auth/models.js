"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinPayloadModel = exports.signupPayloadModel = void 0;
const zod_1 = require("zod");
exports.signupPayloadModel = zod_1.z.object({
    firstName: zod_1.z.string().min(2),
    lastName: zod_1.z.string().nullable().optional(),
    email: zod_1.z.email(),
    password: zod_1.z.string().min(6)
});
exports.signinPayloadModel = zod_1.z.object({
    email: zod_1.z.email(),
    password: zod_1.z.string().min(6)
});
//# sourceMappingURL=models.js.map