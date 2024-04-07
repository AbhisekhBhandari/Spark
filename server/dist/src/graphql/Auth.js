"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMutation = exports.Auth = void 0;
const nexus_1 = require("nexus");
exports.Auth = (0, nexus_1.objectType)({
    name: 'AuthPayload',
    definition(t) {
        t.nonNull.string("token");
        t.nonNull.field('user', {
            type: 'User'
        });
    }
});
exports.AuthMutation = (0, nexus_1.extendType)({
    type: 'Mutation',
    definition(t) {
        t.field("signup", {
            type: "AuthPayload",
            args: {
                email: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                password: (0, nexus_1.nonNull)((0, nexus_1.stringArg)())
            },
            resolve(parent, args, context) {
                const { email, password } = args;
                console.log('here is the email and password', email, password);
                return {
                    token: 'token here',
                    user: {
                        userId: '123',
                        username: 'hello username',
                        email: email,
                        profilePicture: '',
                        password: password,
                        isDataFilled: false
                    }
                };
            }
        });
    },
});
//# sourceMappingURL=Auth.js.map