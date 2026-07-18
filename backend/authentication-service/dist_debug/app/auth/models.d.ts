import { z } from 'zod';
export declare const signupPayloadModel: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export declare const signinPayloadModel: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=models.d.ts.map