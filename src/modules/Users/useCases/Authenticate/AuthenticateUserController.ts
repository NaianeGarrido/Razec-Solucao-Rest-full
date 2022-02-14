import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { Request, Response } from "express";


interface IBodyAuthenticateUser {
  email: string;
  password: string;
}
class AuthenticateUserController{
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body as IBodyAuthenticateUser;
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)
    const token = await authenticateUserUseCase.execute({email, password})


    return response.json(token);
  }
}
export { AuthenticateUserController }