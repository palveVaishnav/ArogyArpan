import z from "zod";
export declare const fundraiserType: z.ZodObject<{
    id: z.ZodNumber;
    authorId: z.ZodNumber;
    authorName: z.ZodString;
    createdAt: z.ZodEffects<z.ZodString, Date, string>;
    title: z.ZodString;
    patientName: z.ZodString;
    age: z.ZodNumber;
    location: z.ZodString;
    hospital: z.ZodString;
    disgnose: z.ZodString;
    story: z.ZodString;
    amount: z.ZodNumber;
    raised: z.ZodNumber;
    due: z.ZodEffects<z.ZodString, Date, string>;
    verified: z.ZodBoolean;
    doctorId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    doctorName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: number;
    authorId: number;
    authorName: string;
    createdAt: Date;
    title: string;
    patientName: string;
    age: number;
    location: string;
    hospital: string;
    disgnose: string;
    story: string;
    amount: number;
    raised: number;
    due: Date;
    verified: boolean;
    doctorId?: string | null | undefined;
    doctorName?: string | null | undefined;
}, {
    id: number;
    authorId: number;
    authorName: string;
    createdAt: string;
    title: string;
    patientName: string;
    age: number;
    location: string;
    hospital: string;
    disgnose: string;
    story: string;
    amount: number;
    raised: number;
    due: string;
    verified: boolean;
    doctorId?: string | null | undefined;
    doctorName?: string | null | undefined;
}>;
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
export declare const validationTable: z.ZodObject<{
    id: z.ZodNumber;
    doctorId: z.ZodNumber;
    fundraiserId: z.ZodNumber;
    status: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: boolean;
    id: number;
    doctorId: number;
    fundraiserId: number;
    message?: string | undefined;
}, {
    status: boolean;
    id: number;
    doctorId: number;
    fundraiserId: number;
    message?: string | undefined;
}>;
export declare const verifyFdInput: z.ZodObject<{
    doctorId: z.ZodNumber;
    verified: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    verified: boolean;
    doctorId: number;
    message?: string | undefined;
}, {
    verified: boolean;
    doctorId: number;
    message?: string | undefined;
}>;
export declare const transactionType: z.ZodObject<{
    id: z.ZodNumber;
    Fid: z.ZodNumber;
    donorId: z.ZodOptional<z.ZodNumber>;
    donorName: z.ZodString;
    amount: z.ZodNumber;
    time: z.ZodString;
    status: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: boolean;
    id: number;
    amount: number;
    Fid: number;
    donorName: string;
    time: string;
    message?: string | undefined;
    donorId?: number | undefined;
}, {
    status: boolean;
    id: number;
    amount: number;
    Fid: number;
    donorName: string;
    time: string;
    message?: string | undefined;
    donorId?: number | undefined;
}>;
