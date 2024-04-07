"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphqlServer = void 0;
const server_1 = require("@apollo/server");
const schema_1 = require("../utils/schema");
async function createGraphqlServer() {
    const server = new server_1.ApolloServer({ schema: schema_1.schema });
    await server.start();
    return server;
}
exports.createGraphqlServer = createGraphqlServer;
//# sourceMappingURL=server.js.map