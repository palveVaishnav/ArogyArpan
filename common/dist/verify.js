"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationTable = exports.verifyFdInput = void 0;
const zod_1 = __importDefault(require("zod"));
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
