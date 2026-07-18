"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const index_1 = require("./app/index");
async function main() {
    try {
        const server = (0, node_http_1.createServer)((0, index_1.createApplication)());
        const PORT = 8080;
        server.listen(PORT, () => {
            console.log(`Http server is running on PORT ${PORT}`);
        });
    }
    catch (error) {
        console.log(`Error starting http server`);
        throw error;
    }
}
main();
//# sourceMappingURL=index.js.map