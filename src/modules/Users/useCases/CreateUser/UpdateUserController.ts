import { container } from "tsyringe";
import { Request, Response} from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

interface IBodyUpdateUser {
  name?: string;
  email?: string;
  password?: string;
  sex?: string; 
  profile?: string;
}

class UpdateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, profile, sex } = request.body as IBodyUpdateUser;
    const { id } = request.params;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const updateUser = await updateUserUseCase.execute({
      id,
      name,
      email,
      password,
      profile,
      sex,
    });
    return response.status(200).json(updateUser);
  }
}
export { UpdateUserController };