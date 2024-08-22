import z from "zod";
export declare const userType: z.ZodObject<{
    id: z.ZodNumber;
    createdAt: z.ZodDate;
    name: z.ZodString;
    stayAnonymous: z.ZodBoolean;
    profileImg: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    bio: z.ZodString;
    patron: z.ZodBoolean;
    fundraiser: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    transactions: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    bio: string;
    patron: boolean;
    id: number;
    createdAt: Date;
    stayAnonymous: boolean;
    profileImg: string;
    fundraiser: {
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
    }[];
    transactions: {
        status: boolean;
        id: number;
        amount: number;
        Fid: number;
        donorName: string;
        time: string;
        message?: string | undefined;
        donorId?: number | undefined;
    }[];
}, {
    name: string;
    email: string;
    password: string;
    bio: string;
    patron: boolean;
    id: number;
    createdAt: Date;
    stayAnonymous: boolean;
    profileImg: string;
    fundraiser: {
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
    }[];
    transactions: {
        status: boolean;
        id: number;
        amount: number;
        Fid: number;
        donorName: string;
        time: string;
        message?: string | undefined;
        donorId?: number | undefined;
    }[];
}>;
export declare const signupInputUser: z.ZodObject<{
    userType: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userType: string;
    name: string;
    email: string;
    password: string;
}, {
    userType: string;
    name: string;
    email: string;
    password: string;
}>;
export declare const signinInput: z.ZodObject<{
    userType: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userType: string;
    email: string;
    password: string;
}, {
    userType: string;
    email: string;
    password: string;
}>;
export declare const updateUserInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    stayAnonymous: z.ZodOptional<z.ZodBoolean>;
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
    stayAnonymous?: boolean | undefined;
}, {
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    bio?: string | undefined;
    patron?: boolean | undefined;
    stayAnonymous?: boolean | undefined;
}>;
