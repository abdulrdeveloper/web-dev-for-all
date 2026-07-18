"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const controlller_1 = __importDefault(require("./controlller"));
const authenticationController = new controlller_1.default();
exports.authRouter = express_1.default.Router();
exports.authRouter.post('/sign-up', authenticationController.handleSignup.bind(authenticationController));
exports.authRouter.post('/sign-in', authenticationController.handleSignin.bind(authenticationController));
//# sourceMappingURL=routes.js.map