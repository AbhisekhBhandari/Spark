"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const nexus_1 = require("nexus");
exports.User = (0, nexus_1.objectType)({
    name: "User",
    definition(t) {
        t.id("userId");
        t.string("username");
        t.nonNull.string("email");
        t.string("profilePicture");
        t.string("password");
        t.nonNull.boolean('isDataFilled');
    },
});
//# sourceMappingURL=User.js.map