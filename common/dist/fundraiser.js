"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFdInput = exports.createFdInput = void 0;
const zod_1 = __importDefault(require("zod"));
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
