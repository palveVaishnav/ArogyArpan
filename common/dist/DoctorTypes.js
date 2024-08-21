"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDoctorInput = exports.signupInputDoctor = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInputDoctor = zod_1.default.object({
    userType: zod_1.default.string(),
    name: zod_1.default.string(),
    regno: zod_1.default.number().int().positive(),
    regDate: zod_1.default.string().datetime(),
    stateCouncil: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.updateDoctorInput = zod_1.default.object({
    name: zod_1.default.string().optional(),
    email: zod_1.default.string().email().optional(),
    password: zod_1.default.string().min(6).optional(),
    bio: zod_1.default.string().optional(),
    patron: zod_1.default.boolean().optional(),
    /**
      profileImg  String?
     */
});
