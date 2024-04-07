"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express4_1 = require("@apollo/server/express4");
const server_1 = require("./graphql/server");
async function init() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)(), express_1.default.json());
    app.use((req, res, next) => {
        async function fetch() {
            // const [results, fields] = await connection.query(
            //   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
            // );
            console.log("resul");
        }
        fetch();
        console.log("eun");
        next();
    });
    app.use("/graphql", (0, express4_1.expressMiddleware)(await (0, server_1.createGraphqlServer)()));
    app.listen(4000, () => {
        console.log("listening");
    });
}
init();
//# sourceMappingURL=index.js.map