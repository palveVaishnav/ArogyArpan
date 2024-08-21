"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationTable = exports.verifyFdInput = exports.updateFdInput = exports.createFdInput = exports.signinInput = exports.signupInputDoctor = exports.signupInputUser = void 0;
const zod_1 = __importDefault(require("zod"));
// author and donor 
exports.signupInputUser = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
// Doctor signup 
exports.signupInputDoctor = zod_1.default.object({
    name: zod_1.default.string(),
    regno: zod_1.default.number().int().positive(),
    regDate: zod_1.default.string().datetime(),
    stateCouncil: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    // name : z.string() // will add username later
});
exports.createFdInput = zod_1.default.object({
    authorId: zod_1.default.number().int().positive(),
    authorName: zod_1.default.string(),
    title: zod_1.default.string(),
    patientName: zod_1.default.string(),
    age: zod_1.default.number().int().positive(),
    location: zod_1.default.string(),
    hospital: zod_1.default.string(),
    disgnose: zod_1.default.string(),
    story: zod_1.default.string(),
    amount: zod_1.default.number().int().positive(),
    due: zod_1.default.string().datetime(),
});
exports.updateFdInput = zod_1.default.object({
    title: zod_1.default.string(),
    patientName: zod_1.default.string(),
    age: zod_1.default.number().int().positive(),
    location: zod_1.default.string(),
    hospital: zod_1.default.string(),
    disgnose: zod_1.default.string(),
    story: zod_1.default.string(),
    amount: zod_1.default.number().int().positive(),
    due: zod_1.default.string().datetime(),
});
exports.verifyFdInput = zod_1.default.object({
    doctorId: zod_1.default.number().int().positive(),
    verified: zod_1.default.boolean(),
    message: zod_1.default.string().optional()
});
exports.validationTable = zod_1.default.object({
    doctorId: zod_1.default.number().int().positive(),
    fundraiserId: zod_1.default.number().int().positive(),
    status: zod_1.default.boolean(),
    message: zod_1.default.string().optional()
});
