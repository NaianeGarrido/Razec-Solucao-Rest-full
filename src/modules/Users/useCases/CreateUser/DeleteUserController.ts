import { container } from "tsyringe"
import { DeleteUserUsecase } from "./DeleteUserUseCase" 
import { Request, Response } from "express"

class DeleteUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const deleteUserUsecase = container.resolve(DeleteUserUsecase);
    await deleteUserUsecase.execute(id);
    return response.status(204).send();
  }
}
export { DeleteUserController };
