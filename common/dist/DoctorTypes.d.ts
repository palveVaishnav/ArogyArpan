import z from "zod";
export declare const signupInputDoctor: z.ZodObject<{
    userType: z.ZodString;
    name: z.ZodString;
    regno: z.ZodNumber;
    regDate: z.ZodString;
    stateCouncil: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userType: string;
    name: string;
    regno: number;
    regDate: string;
    stateCouncil: string;
    email: string;
    password: string;
}, {
    userType: string;
    name: string;
    regno: number;
    regDate: string;
    stateCouncil: string;
    email: string;
    password: string;
}>;
export declare const updateDoctorInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    patron: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    bio?: string | undefined;
    patron?: boolean | undefined;
}, {
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    bio?: string | undefined;
    patron?: boolean | undefined;
}>;
