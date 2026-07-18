import { Request, Response } from 'express';
declare class AuthenticationControlller {
    handleSignup(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    handleSignin(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export default AuthenticationControlller;
//# sourceMappingURL=controlller.d.ts.map