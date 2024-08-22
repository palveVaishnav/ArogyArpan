"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserInput = exports.signinInput = exports.signupInputUser = exports.userType = void 0;
const zod_1 = __importDefault(require("zod"));
const OtherTypes_1 = require("./OtherTypes");
exports.userType = zod_1.default.object({
    id: zod_1.default.number().int(),
    createdAt: zod_1.default.date(),
    name: zod_1.default.string(),
    stayAnonymous: zod_1.default.boolean(),
    profileImg: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    bio: zod_1.default.string() || null,
    patron: zod_1.default.boolean(),
    fundraiser: zod_1.default.array(OtherTypes_1.fundraiserType),
    transactions: zod_1.default.array(OtherTypes_1.transactionType),
});
// author and donor 
exports.signupInputUser = zod_1.default.object({
    userType: zod_1.default.string(),
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
// similar for both 
exports.signinInput = zod_1.default.object({
    userType: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    // name : z.string() // will add username later
});
exports.updateUserInput = zod_1.default.object({
    name: zod_1.default.string().optional(),
    stayAnonymous: zod_1.default.boolean().optional(),
    email: zod_1.default.string().email().optional(),
    password: zod_1.default.string().min(6).optional(),
    bio: zod_1.default.string().optional(),
    patron: zod_1.default.boolean().optional(),
    /**
      profileImg    String?
    }
     */
});
