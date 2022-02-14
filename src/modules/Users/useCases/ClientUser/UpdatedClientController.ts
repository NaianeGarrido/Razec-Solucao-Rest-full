import { container } from "tsyringe";
import { Request, Response } from "express"
import { UpdatedClientUseCase } from "./UpdatedClientUseCase";

interface IBodyUpdateClient {
  name: string;
  email: string;
  phoneNumber: string;
}

class UpdatedClientController {
  public async handle(request:Request, response:Response): Promise<Response> {
    const {id} = request.params
    const {name, email, phoneNumber,} = request.body as IBodyUpdateClient;
    const updatedClientUseCase = container.resolve( UpdatedClientUseCase)
    const updatedClient = await updatedClientUseCase.execute(id, {
      name,
      email,
      phoneNumber,
    });
    return response.status(200).json(updatedClient);
  }
}
export { UpdatedClientController}