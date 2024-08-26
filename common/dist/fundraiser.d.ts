import z from "zod";
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
