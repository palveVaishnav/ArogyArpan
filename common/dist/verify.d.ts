import z from "zod";
export declare const verifyFdInput: z.ZodObject<{
    doctorId: z.ZodNumber;
    verified: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    doctorId: number;
    verified: boolean;
    message?: string | undefined;
}, {
    doctorId: number;
    verified: boolean;
    message?: string | undefined;
}>;
export type VerifyFdInput = z.infer<typeof verifyFdInput>;
export declare const validationTable: z.ZodObject<{
    doctorId: z.ZodNumber;
    fundraiserId: z.ZodNumber;
    status: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: boolean;
    doctorId: number;
    fundraiserId: number;
    message?: string | undefined;
}, {
    status: boolean;
    doctorId: number;
    fundraiserId: number;
    message?: string | undefined;
}>;
export type ValidationTable = z.infer<typeof validationTable>;
