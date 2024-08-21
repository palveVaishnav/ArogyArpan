"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionType = exports.verifyFdInput = exports.validationTable = exports.updateFdInput = exports.createFdInput = exports.fundraiserType = void 0;
const zod_1 = __importDefault(require("zod"));
exports.fundraiserType = zod_1.default.object({
    id: zod_1.default.number(),
    authorId: zod_1.default.number(),
    authorName: zod_1.default.string(),
    createdAt: zod_1.default.string().transform((str) => new Date(str)), // Convert string to Date
    title: zod_1.default.string(),
    patientName: zod_1.default.string(),
    age: zod_1.default.number(),
    location: zod_1.default.string(),
    hospital: zod_1.default.string(),
    disgnose: zod_1.default.string(),
    story: zod_1.default.string(),
    amount: zod_1.default.number(),
    raised: zod_1.default.number(),
    due: zod_1.default.string().transform((str) => new Date(str)), // Convert string to Date
    verified: zod_1.default.boolean(),
    doctorId: zod_1.default.string().nullable().optional(),
    doctorName: zod_1.default.string().nullable().optional(),
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
exports.validationTable = zod_1.default.object({
    id: zod_1.default.number(),
    doctorId: zod_1.default.number().int().positive(),
    fundraiserId: zod_1.default.number().int().positive(),
    status: zod_1.default.boolean(),
    message: zod_1.default.string().optional()
});
exports.verifyFdInput = zod_1.default.object({
    doctorId: zod_1.default.number().int().positive(),
    verified: zod_1.default.boolean(),
    message: zod_1.default.string().optional()
});
exports.transactionType = zod_1.default.object({
    id: zod_1.default.number(),
    Fid: zod_1.default.number(),
    donorId: zod_1.default.number().optional(),
    donorName: zod_1.default.string(),
    amount: zod_1.default.number(),
    time: zod_1.default.string().datetime(),
    status: zod_1.default.boolean(),
    message: zod_1.default.string().optional(),
});
