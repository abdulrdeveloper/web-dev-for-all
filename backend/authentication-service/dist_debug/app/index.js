"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApplication = createApplication;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./auth/routes");
function createApplication() {
    const app = (0, express_1.default)();
    // Middlewares
    app.use(express_1.default.json());
    // Routes
    app.get('/', (req, res) => {
        return res.json({ message: 'Welcome to AR Auth Service, It`s Working' });
    });
    app.use('/auth', routes_1.authRouter);
    return app;
}
//# sourceMappingURL=index.js.map