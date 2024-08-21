import z from "zod";
export declare const signupInputUser: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export type SignupInputUser = z.infer<typeof signupInputUser>;
export declare const signupInputDoctor: z.ZodObject<{
    name: z.ZodString;
    regno: z.ZodNumber;
    regDate: z.ZodString;
    stateCouncil: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    regno: number;
    regDate: string;
    stateCouncil: string;
}, {
    name: string;
    email: string;
    password: string;
    regno: number;
    regDate: string;
    stateCouncil: string;
}>;
export type SignupInputDoctor = z.infer<typeof signupInputDoctor>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type SigninInput = z.infer<typeof signinInput>;
export declare const createFdInput: z.ZodObject<{
    authorId: z.ZodNumber;
    authorName: z.ZodString;
    title: z.ZodString;
    patientName: z.ZodString;
    age: z.ZodNumber;
    location: z.ZodString;
    hospital: z.ZodString;
    disgnose: z.ZodString;
    story: z.ZodString;
    amount: z.ZodNumber;
    due: z.ZodString;
}, "strip", z.ZodTypeAny, {
    authorId: number;
    authorName: string;
    title: string;
    patientName: string;
    age: number;
    location: string;
    hospital: string;
    disgnose: string;
    story: string;
    amount: number;
    due: string;
}, {
    authorId: number;
    authorName: string;
    title: string;
    patientName: string;
    age: number;
    location: string;
    hospital: string;
    disgnose: string;
    story: string;
    amount: number;
    due: string;
}>;
export type CreateFdInput = z.infer<typeof createFdInput>;
export declare const updateFdInput: z.ZodObject<{
    title: z.ZodString;
    patientName: z.ZodString;
    age: z.ZodNumber;
    location: z.ZodString;
    hospital: z.ZodString;
    disgnose: z.ZodString;
    story: z.ZodString;
    amount: z.ZodNumber;
    due: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    patientName: string;
    age: number;
    location: string;
    hospital: string;
    disgnose: string;
    story: string;
    amount: number;
    due: string;
}, {
    title: string;
    patientName: string;
    age: number;
    location: string;
    hospital: string;
    disgnose: string;
    story: string;
    amount: number;
    due: string;
}>;
export type UpdateFdInput = z.infer<typeof updateFdInput>;
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
