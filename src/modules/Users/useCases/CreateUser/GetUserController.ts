import { container } from "tsyringe";
import { GetUserUseCase} from "./GetUserUseCase";
import { Request, Response} from "express";

class GetUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getUserUseCase = container.resolve(GetUserUseCase);
    const getUser = await getUserUseCase.execute();
    return response.status(200).json(getUser);
  }
}
export { GetUserController };